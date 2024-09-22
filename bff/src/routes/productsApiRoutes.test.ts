import request from 'supertest';

import {productsAxios} from '../utils/productsAxios'
import server from '../index';

jest.mock('../utils/productsAxios', () => ({
    productsAxios: {
        get: jest.fn()
    }
}));

const productsAxiosMock = productsAxios as jest.Mocked<typeof productsAxios>;

const product = {
    name: "Product_Name",
    description: "Product_Description",
    category: "Product_Category",
    price: 100,
    amount: 5,
    id: '1'
};

describe('productsApiRoutes', () => {
    afterAll((done) => {
        server.close(done); // Close the server after tests
    });
    describe('/products/:id', () => {
        it("GET /products/:id should return a product", async () => {
            productsAxiosMock.get.mockResolvedValue({data: {data: [product]}});

            const response = await request(server).get('/products/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual({data: [product]});   });

        it("GET /products/:id throw the error in case of some issues", async () => {
            productsAxiosMock.get.mockRejectedValue(new Error('Network Error'));
            try {
                await request(server).get('/products/1');
            } catch (error) {
                expect(error).toEqual({error: 'Error fetching products'});
            }
        })
    })
})
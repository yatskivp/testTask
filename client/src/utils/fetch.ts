import axios from './getAxios';

export const fetch = async (
  url: string,
  params: Record<string, string | undefined>[] = [],
  errorMessage: string = 'Error fetching',
) => {
  try {
    const queryParams = new URLSearchParams();
    params.forEach((param) => {
      if (param.value !== undefined) {
        queryParams.append(param.key as string, param.value);
      }
    });
    const response = await axios.get(
      queryParams.size > 0 ? `${url}?${queryParams}` : url,
    );
    const productDetails = response.data;

    return productDetails;
  } catch (error) {
    console.error(errorMessage, error);
    throw new Error(errorMessage);
  }
};

import NodeCache  from 'node-cache';

const cacheClient = new NodeCache({ stdTTL: 600, checkperiod: 120 });

export default {
    get: (key: string) => cacheClient.get(key),
    set: (key: string, data: unknown) => cacheClient.set(key, data),
};

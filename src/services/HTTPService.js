import axios from 'axios';

class HTTPService {
    constructor(options) {
        this.client = axios.create(options);
    }

    attachHeaders = async (headers) => {
        Object.assign(this.client.defaults.headers, headers);
    }
}

const options = {
    baseURL: 'https://chordhub-297103.et.r.appspot.com',
    timeout: 10000,
};

const httpService = new HTTPService(options);

export default httpService;

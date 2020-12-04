import httpService from './HTTPService';

class APIService {
  constructor() {
    this.api = httpService;
    this.apiClient = this.api.client;
  }
}

export default APIService;

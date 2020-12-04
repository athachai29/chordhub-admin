import APIService from './APIService';

const ENDPOINT = {
    LOGIN: '/api/auth/signin',
    LOGOUT: '/api/auth/signout',
};

class AuthService extends APIService {
    login = async (args) => {
        const { data } = await this.apiClient.post(ENDPOINT.LOGIN, args);
        return data;
    };

    setToken = async token => {
        if (token) {
            await this.api.attachHeaders({
                Authorization: `Bearer ${token}`,
            });
        }
    };

    logout = async () => {
        const data = await this.apiClient.post(ENDPOINT.LOGOUT);
        return data;
    }
}

const authService = new AuthService();

export default authService;

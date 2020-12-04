import APIService from './APIService';

const ENDPOINT = {
    ARTIST_COUNT: '/api/artist/count',
    SONG_COUNT: '/api/song/count',
};

class DashboardService extends APIService {
    getArtistNumbers = async () => {
        const { data } = await this.apiClient.get(ENDPOINT.ARTIST_COUNT);
        return data;
    };

    getSongNumbers = async () => {
        const { data } = await this.apiClient.get(ENDPOINT.SONG_COUNT);
        return data;
    };
}

const dashboardService = new DashboardService();

export default dashboardService;

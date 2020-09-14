import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID St34euxI26d3iLMV_bnvdxZC4pFh14EfNm_b7zj9wL4'
    }
});
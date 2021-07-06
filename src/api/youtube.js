import axios from 'axios';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:'AIzaSyBPeFgcV6yyk0IQDfTK5UfET5HuBP_M_gs',
    }

});
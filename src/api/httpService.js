import Axios from 'axios';

const httpPost = async (uri) => {
    try {
        const response = await Axios.post(uri);
        return response;
    } catch (e) {
        return null;
    }
};
export { httpPost };

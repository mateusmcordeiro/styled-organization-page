/**
 * Import Dependency
 */
import axios from 'axios';

const defaultInterceptor = (API_ENV_VARIABLE = 'REACT_APP_MAIN_API_URL', token = null) => {

    let config = {
        baseURL: process.env[API_ENV_VARIABLE]
    }
    if (token !== null) {
        config = {
            baseURL: process.env[API_ENV_VARIABLE],
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    const instance = axios.create(config);
    
    return instance;
}

export default defaultInterceptor;
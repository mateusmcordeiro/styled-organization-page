import ApiService from '../services/api.service';

const ApiServiceProvider = (apiName = 'main', token = null) => {
    return new ApiService(apiName,token);
};

export default ApiServiceProvider;
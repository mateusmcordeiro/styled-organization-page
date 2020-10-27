import defaultInterceptor from "../interceptors/default.interceptor";


const ApiInterceptorProvider = (API_ENV_VARIABLE = 'main', token = null) => {
    let API_ENV = API_ENV_VARIABLE.toUpperCase();
    API_ENV = `REACT_APP_${API_ENV}_API_URL`;
    return defaultInterceptor(API_ENV, token);
}

export default class ApiService {
    constructor(apiName = 'main', token = null) {
        this.apiName = apiName;
        this.token = token;
        this.axiosHttp = ApiInterceptorProvider(apiName, token);
    }

    get(uri, params )
    {
        return this.axiosHttp.get(uri,{params}).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    }

    post(uri, params)
    {
        return this.axiosHttp.post(uri,params);
    }

    put(uri, params)
    {
        return this.axiosHttp.put(uri,params);
    }

    patch(uri, params)
    {
        return this.axiosHttp.patch(uri,params);
    }

    delete(uri)
    {
        return this.axiosHttp.delete(uri).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    }
};



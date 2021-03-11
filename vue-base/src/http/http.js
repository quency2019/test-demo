import axios from 'axios';
import store from '../store'

// 请求拦截
axios.interceptors.request.use(config => {
    // 1. 这个位置就请求前最后的配置
  // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
  if(store.state.token){
    
    // config.headers.common['token'] =store.state.token
  }
  return config
  }, error => {
    return Promise.reject(error)
  })
  
  // 响应拦截
  axios.interceptors.response.use(response => {
  // 请求成功
  // 1. 根据自己项目需求定制自己的拦截
  // 2. 然后返回数据
  return response;
  }, error => {
    // 请求失败
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
            // 对400错误您的处理\
        break
        case 401:
            // 对 401 错误进行处理
        break
        default:
        // 如果以上都不是的处理
        return Promise.reject(error);
      }
    }
  })
  
export default {
    /**
     * get 请求
     * @param url 接口路由
     * @returns {AxiosPromise<any>}
     */
    get(url,params) {
        return axios.get(url, {params:params});
    },

    /**
     * post 请求
     *
     * @param url 接口路由
     * @param data 接口参数
     * @returns {AxiosPromise<any>}
     */
    post(url, data) {
        return axios.post(url, data);
    },

    /**
     * put请求
     * @param url 接口路由
     * @param data 接口参数
     * @returns {AxiosPromise<any>}
     */
    put(url, data) {
        return axios.put(url, data);
    },

    /**
     * 删除
     * @param url 接口路由
     * @returns {AxiosPromise}
     */
    del(url) {
        return axios.delete(url);
    },

    /**
     * 上传文件
     * @param url 接口路由
     * @param file 接口文件
     */
    uploader(url, file) {
        let param = new FormData();
        param.append('file', file)
        return axios.post(url, param)
    },
}
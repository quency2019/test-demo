import Apply from './api/apply.js';

export default {
    Auth:{
        checkPhone:'/api/mobile/auth/checkPhone',
        login:'/api/mobile/auth/login',
        loginManager:'/api/mobile/auth/loginManager'
    },
    Sms:{
        sendCode:'/api/mobile/auth/sendCode'
    },
    // 首页
    Index: {
        index: '/index/index'
    },

    // 个人中心
    My: {
        userInfo: '/user/info'
    },

    // 当然也可以用文件方式进行管理
    Apply: Apply

}
const AppConfig = {
    API: {
        baseURL: 'http://192.168.43.76:8080/pycozza'
},
    IMAGE: {
        baseURL: 'https://drive.google.com/uc?export=view&id=',
    },
    LOCAL_KEY : {
        currentCart: 'currentCart',
        userInfo: 'userInfo',
    },
    API_ENDPOINT: {
        userSignIn: '/user/signin',
        userSignUp: '/user/signup',
        userCompleteOrder: '/order/add',
        product: '/product/',
    }
};

export default AppConfig;
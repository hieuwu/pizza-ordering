const AppConfig = {
    API: {
        baseURL: 'http://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8081/pycozza'
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
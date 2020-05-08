import BaseAPI from '../../services/BaseAPI'

class UserAPI {
    async registerAccount(registerForm) {
        let response = await BaseAPI.post('/user/signup',registerForm)
        return response;
    }

    async loginAccount(loginForm) {
        let response = await BaseAPI.post('/user/signin', loginForm);
        return response;
    }
    async completeOrder(orderForm) {
        let response = await BaseAPI.post('/order/add', orderForm);
        return response.data.status;
    }
}

export default UserAPI
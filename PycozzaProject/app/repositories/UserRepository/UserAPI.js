import BaseAPI from '../../services/BaseAPI'
import AppConfig from '../../config/AppConfig'
class UserAPI {
    async registerAccount(registerForm) {
        let response = await BaseAPI.post(AppConfig.API_ENDPOINT.userSignUp,registerForm)
        return response;
    }

    async loginAccount(loginForm) {
        let response = await BaseAPI.post(AppConfig.API_ENDPOINT.userSignIn, loginForm);
        return response;
    }
    async completeOrder(orderForm) {
        let response = await BaseAPI.post(AppConfig.API_ENDPOINT.userCompleteOrder, orderForm);
        return response.data.status;
    }
}

export default UserAPI
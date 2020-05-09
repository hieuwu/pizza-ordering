import BaseApi from '../../../core/services/BaseApi';

class UserAPI {
  async signIn(loginData) {
    // let response = await BaseApi.post('/h/user/login', loginData);
    let response = await BaseApi.post('/user/login', loginData);
    return response;
  }

  async signUpUser(signUpData) {
    // let response = await BaseApi.post('/h/user/signup', signUpData);
    let response = await BaseApi.post('/user/signup', signUpData);
    return response;
  }
}

export default UserAPI;

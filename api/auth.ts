import ApiClient from './apiClient';
import { LoginPayload, RegistrationPayload } from './types';
import apiEndpoints from './endPoints';

class AuthApi extends ApiClient {
  login(credential: LoginPayload) {
    return this.post(apiEndpoints.auth.login, credential);
  }

  register(registrationInfo: RegistrationPayload) {
    return this.post(apiEndpoints.auth.register, registrationInfo);
  }
}

export default new AuthApi();

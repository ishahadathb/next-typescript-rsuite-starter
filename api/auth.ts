import ApiClient from './apiClient';
import { LoginPayload, RegistrationPayload } from './types';
import apiEndpoints from './endPoints';

type AuthTokens = {
  access_tokne: string;
  refresh_token: string;
};

class AuthApi extends ApiClient {
  login(credential: LoginPayload) {
    return this.post<AuthTokens, LoginPayload>(
      apiEndpoints.auth.login,
      credential
    );
  }

  register(registrationInfo: RegistrationPayload) {
    return this.post<AuthTokens, RegistrationPayload>(
      apiEndpoints.auth.register,
      registrationInfo
    );
  }
}

export default new AuthApi();

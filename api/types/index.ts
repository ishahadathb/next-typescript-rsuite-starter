export type LoginPayload = {
  username: string;
  password: string;
};

export type RegistrationPayload = {
  username: string;
  password: string;
  address: string;
  phone: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type ErrorType = {
  error: boolean;
  status: number | undefined;
  data: any;
};

export type ApiResponseType<T> = Promise<T | ErrorType>;

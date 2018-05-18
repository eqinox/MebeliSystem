export interface RegisterUserResponseModel {
  success: boolean;
  message: string;
  user: { username };
  token: string;
}

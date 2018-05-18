export interface LoginUserResponseModel {
  success: boolean;
  message: string;
  user: { username };
  token: string;
}

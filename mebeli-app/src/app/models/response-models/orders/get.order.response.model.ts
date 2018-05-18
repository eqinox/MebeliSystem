export interface GetOrderResponseModel {
  success: boolean;
  message: string;
  order: { id, name, phone, city, neighborhood, deposit, finalPrice, date };
}

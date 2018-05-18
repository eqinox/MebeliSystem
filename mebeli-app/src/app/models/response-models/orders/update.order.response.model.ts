export interface UpdateOrderResponseModel {
  success: boolean;
  message: string;
  order: { id, name, phone, city, neighborhood, deposit, finalPrice, date };
}

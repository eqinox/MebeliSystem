import { Order } from '../../order';

export interface AddOrderResponseModel {
  success: boolean;
  message: string;
  order: Order;
}

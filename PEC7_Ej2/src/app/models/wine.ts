import {Food} from "./food";

export interface Wine {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  foodPairing: Food[];
}

import { message } from "antd";
import { cartKey } from "@/constants/storageKey";

export const addToLocalStorage = (
  id: string,
  proId: string,
  imgURL: string,
  name: string,
  category: string,
  price: string
) => {
  const product = {
    id,
    proId,
    imgURL,
    name,
    category,
    price,
  };
  const storage = localStorage.getItem(cartKey);
  if (storage !== null) {
    const addedAllProductOnCard = JSON.parse(storage);
    const selectedProduct = addedAllProductOnCard.find(
      (cartProduct: any) => cartProduct?.id == id
    );
    if (selectedProduct) {
      message.info(`You already add ${name} on your cart.`);
    } else {
      message.success(`Added ${name} on your cart successfully....`);
      addedAllProductOnCard.push(product);
      localStorage.setItem(cartKey, JSON.stringify(addedAllProductOnCard));
    }
  } else {
    localStorage.setItem(cartKey, JSON.stringify([product]));
  }
};

export const removeFromLocalStorage = (id: string, name: string) => {
  const storage = localStorage.getItem(cartKey);
  const addedAllProductOnCard = JSON.parse(storage!);
  const newCard = addedAllProductOnCard.filter((item: any) => item.id !== id);
  localStorage.setItem(cartKey, JSON.stringify(newCard));
  message.success(`Removed ${name} from your cart successfully....`);
};

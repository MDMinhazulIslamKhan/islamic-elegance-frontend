import { message } from "antd";
import { productKey } from "@/constants/storageKey";

export const addToLocalStorage = (id: string, name: string, size: string) => {
  const product = {
    id,
    size,
  };
  const storage = localStorage.getItem(productKey);
  if (storage !== null) {
    const addedAllProductOnCard = JSON.parse(storage);
    const selectedProduct = addedAllProductOnCard.find(
      (cartProduct: any) => cartProduct?.id == id && cartProduct.size == size
    );
    if (selectedProduct) {
      message.info(`You already add ${name} on your cart.`);
    } else {
      message.success(`Added ${name} on your cart successfully....`);
      addedAllProductOnCard.push(product);
      localStorage.setItem(productKey, JSON.stringify(addedAllProductOnCard));
    }
  } else {
    localStorage.setItem(productKey, JSON.stringify([product]));
  }
};

export const removeFromLocalStorage = (
  id: string,
  name: string,
  size: string
) => {
  const storage = localStorage.getItem(productKey);
  const addedAllProductOnCard = JSON.parse(storage!);
  const newCard = addedAllProductOnCard.filter(
    (item: any) => item.id !== id && item.size != size
  );
  localStorage.setItem(productKey, JSON.stringify(newCard));
  message.success(`Removed ${name} from your cart successfully....`);
};

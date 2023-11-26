import { message } from "antd";
import { productKey } from "@/constants/storageKey";

export const addToLocalStorage = (
  id: string,
  name: string,
  quantity: number
) => {
  const product = {
    id,
    name,
    quantity,
  };
  const storage = localStorage.getItem(productKey);
  if (storage !== null) {
    const addedAllProductOnCard = JSON.parse(storage);
    const selectedProduct = addedAllProductOnCard.find(
      (cartProduct: any) => cartProduct?.id == id
    );
    if (selectedProduct) {
      message.info(`You already add "${name}" on your cart.`);
    } else {
      message.success(`Added "${name}" on your cart successfully....`);
      addedAllProductOnCard.push(product);
      localStorage.setItem(productKey, JSON.stringify(addedAllProductOnCard));
    }
  } else {
    localStorage.setItem(productKey, JSON.stringify([product]));
  }
};

// increasing quantity
export const increaseQuantity = (id: string) => {
  const storage = localStorage.getItem(productKey);
  if (storage !== null) {
    const addedAllProductOnCard = JSON.parse(storage);
    const selectedProductIndex = addedAllProductOnCard.findIndex(
      (cartProduct: any) => cartProduct?.id == id
    );

    if (selectedProductIndex !== -1) {
      addedAllProductOnCard[selectedProductIndex].quantity += 1;
      localStorage.setItem(productKey, JSON.stringify(addedAllProductOnCard));
    }
  }
};

// decreasing quantity
export const decreaseQuantity = (id: string) => {
  const storage = localStorage.getItem(productKey);
  if (storage !== null) {
    const addedAllProductOnCard = JSON.parse(storage);
    const selectedProductIndex = addedAllProductOnCard.findIndex(
      (cartProduct: any) => cartProduct?.id == id
    );

    if (selectedProductIndex !== -1) {
      addedAllProductOnCard[selectedProductIndex].quantity -= 1;

      if (addedAllProductOnCard[selectedProductIndex].quantity <= 0) {
        addedAllProductOnCard.splice(selectedProductIndex, 1);
      }

      localStorage.setItem(productKey, JSON.stringify(addedAllProductOnCard));
    }
  }
};

export const removeFromLocalStorage = (id: string, name: string) => {
  const storage = localStorage.getItem(productKey);
  const addedAllProductOnCard = JSON.parse(storage!);
  const newCard = addedAllProductOnCard.filter((item: any) => item.id !== id);
  localStorage.setItem(productKey, JSON.stringify(newCard));
  message.success(`Removed ${name} from your cart successfully....`);
};

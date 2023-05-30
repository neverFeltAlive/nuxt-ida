import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    addProduct(product) {
      const newProduct = {
        id: new Date(),
        ...product,
      };
      this.products.push(newProduct);
    },
    removeProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
  },
});

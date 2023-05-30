import { useProductsStore } from '~/store/useProductsStore';

export const useProducts = () => {
  const { products } = useProductsStore();

  return { products };
};

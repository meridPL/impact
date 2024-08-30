import { CART_LOCAL_STORAGE } from '@/globalVariable';
import { Product } from '@/type/product';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useCartStore = create<{
  cart: Product[];
  initCart: () => void;
  addToCart: (productIn: Product) => void;
  changeQuantity: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getSummary: () => number;
}>()(devtools((set, get) => (
  {
    cart: [],
    initCart: () => set(() => {
      const itemFromLocalStorage = localStorage.getItem(CART_LOCAL_STORAGE)
      try {
        if (itemFromLocalStorage) {
          return { cart: JSON.parse(itemFromLocalStorage) }
        } else {
          return { cart: [] }
        }
      } catch (error) {
        return { cart: [] }
      }
    }),
    addToCart: (product) => set((state) => {
      const products = [...state.cart, { ...product, quantity: product.quantity || 0 + 1 }]
      localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(products))
      return { cart: products }
    }),
    removeFromCart: (productId: number) => set((state) => {
      const products = state.cart.filter((product) => product.id !== productId && product)
      localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(products))
      return { cart: products }
    }),
    changeQuantity: (productIn) => set((state) => {
      let products = state.cart
      products = products.map((product) => {
        if (product.id === productIn.id) {
          return productIn
        }
        return product
      })
      localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(products))
      return { cart: products }
    }),
    getSummary: () => {
      const summary = get().cart.reduce((acc, product) => acc + (product.price || 0) * product.quantity, 0)
      return summary
    }
  }
), { name: 'cart' }))


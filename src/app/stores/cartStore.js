import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set) => ({
            itemsCount: 0,
            itemsInCart: [],
            addToCart: (product) => set((state) => {
                const isExist = state.itemsInCart.find(item => item.id === product.id);
                let updatedCart

                if (isExist) {
                    updatedCart = state.itemsInCart.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                } else {
                    updatedCart = [...state.itemsInCart, { ...product, quantity: 1 }]
                }
                const totalQuantity = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
                return {
                    itemsInCart: updatedCart,
                    itemsCount: totalQuantity
                }


            }),
            removeCart: (id) => set(((state) => {
                const updatedCart = state.itemsInCart.filter(item => item.id !== id)
                return {
                    itemsInCart: updatedCart,
                    itemsCount: updatedCart.length
                }
            })),
            clearCard: () => set({ itemsCount: 0, itemsInCart: [] }),

        }),
        {
            name: 'cart-storage', // 🔑 key in localStorage
        }
    )
)


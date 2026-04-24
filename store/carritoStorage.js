import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCarrito = create(persist(
    set => ({
        carrito: [],
        añadirCarrito: (producto) => set(state => ({
            carrito: [...state.carrito, producto]
        })),
        eliminarCarrito: (id) => set(state => ({
            carrito: state.carrito.filter(p => p.id !== id)
        })),
        limpiarCarrito: () => set({ carrito: [] })
    }),
    {
        name: "carrito-storage"
    }
))

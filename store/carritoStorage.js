import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useFavoritas = create(persist(
    set => ({
        carrito: [],
        añadirCarrito: (idProducto) => set(state => ({
            carrito: [...state.favoritas, idPeli]
        })),
        eliminarCarrito: (idProducto) => set(state => ({
            carrito: state.carrito.filter(f => f !== idPeli)
        }))
    }),
    {
        name: "carrito-storage"
    }
))

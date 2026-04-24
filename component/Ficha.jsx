"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useCarrito } from "@/store/carritoStorage"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { fetchProductos } from "@/lib/apiFalsa"

export function Tarjeta() {
  const [producto, setProducto] = useState(null)
  const { carrito, añadirCarrito } = useCarrito()

  useEffect(() => {
    fetchProductos().then(data => {
      setProducto(data[0])
      console.log(data[0])
    })
  }, [])

  const handleAgregarCarrito = () => {
    if (producto) {
      añadirCarrito(producto)
      console.log("Producto agregado al carrito:", producto)
    }
  }

  if (!producto) return <div>Cargando...</div>

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={producto.image}
        alt={producto.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
        </CardAction>
        <CardTitle>{producto.title}</CardTitle>
        <CardDescription>
          {producto.description}
        </CardDescription>
      </CardHeader>
      <div className="px-6 pb-2 text-lg font-bold">${producto.price}</div>
      <CardFooter>
        <Button className="w-full" onClick={handleAgregarCarrito}>🛒 {carrito.length}</Button>
      </CardFooter>
    </Card>
  )
}

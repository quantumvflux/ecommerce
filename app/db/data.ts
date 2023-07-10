import { StaticImageData } from "next/image";
import product from "./assets/product.webp"


export interface Product {
    id: number
    title: string;
    price: number
    image: StaticImageData
    description: string
    weight: string
    size: string
    material: string
}

export const data: Product[] = [{
    id: 1,
    title: "Product",
    price: 15.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
},
{
    id: 2,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 3,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 4,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 5,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 6,
    title: "Product",
    price: 15.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
},
{
    id: 7,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 8,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 9,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}, {
    id: 10,
    title: "Product",
    price: 9.99,
    image: product,
    description: "lorem ipsum dolor sit amet",
    weight: "",
    size: "",
    material: ""
}]
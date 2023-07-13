import { StaticImageData } from "next/image";
import image1 from "./assets/wireless-earbuds.jpg"
import image2 from "./assets/leather-wallet.jpg"
import image3 from "./assets/cushion-set.jpg"
import image4 from "./assets/facial-serum.jpg"
import image5 from "./assets/camping-backpack.jpg"
import image6 from './assets/gaming-mouse.jpg'
import image7 from "./assets/floral-dress.jpg"
import image8 from "./assets/knife-set.webp"
import image9 from "./assets/face-cleanser.webp"
import image10 from './assets/yoga-mat.jpg'
import image11 from './assets/bluetooth-speaker.jpg'
import image12 from "./assets/man-sneaker.jpg"
import image13 from './assets/office-desk.jpg'
import image14 from './assets/body-lotion.jpg'
import image15 from "./assets/camping-tent.jpg"


export interface Product {
    id: number
    title: string;
    price: number
    image: StaticImageData
    description: string
    category: "electronics" | "fashion" | "home" | "beauty" | "sports"
    weight: string
    size: string
    material: string
}


export const data: Product[] = [
    {
        id: 1,
        title: "Wireless Bluetooth Earbuds",
        price: 49.99,
        image: image1,
        description: "Enjoy wireless freedom with these high-quality Bluetooth earbuds. They provide crystal-clear sound and come with a charging case for on-the-go convenience.",
        category: "electronics",
        weight: "0.1 kg",
        size: "Small",
        material: "Plastic"
    },
    {
        id: 2,
        title: "Men's Classic Leather Wallet",
        price: 29.99,
        image: image2,
        description: "Carry your essentials in style with this classic leather wallet. It features multiple card slots, a transparent ID window, and a spacious bill compartment.",
        category: "fashion",
        weight: "0.2 kg",
        size: "Medium",
        material: "Genuine Leather"
    },
    {
        id: 3,
        title: "Decorative Cushion Cover Set",
        price: 19.99,
        image: image3,
        description: "Add a touch of elegance to your living space with this set of decorative cushion covers. Made from premium fabric, they feature intricate patterns and provide a cozy feel.",
        category: "home",
        weight: "0.3 kg",
        size: "Standard",
        material: "Polyester"
    },
    {
        id: 4,
        title: "Anti-Aging Facial Serum",
        price: 39.99,
        image: image4,
        description: "Revitalize your skin with this advanced anti-aging facial serum. Packed with powerful antioxidants and natural ingredients, it helps reduce fine lines and wrinkles.",
        category: "beauty",
        weight: "0.05 kg",
        size: "Small",
        material: "Liquid"
    },
    {
        id: 5,
        title: "Outdoor Camping Backpack",
        price: 79.99,
        image: image5,
        description: "Gear up for your next adventure with this spacious and durable camping backpack. It features multiple compartments, adjustable straps, and a built-in hydration system.",
        category: "sports",
        weight: "1.5 kg",
        size: "Large",
        material: "Nylon"
    },
    {
        id: 6,
        title: "Wireless Gaming Mouse",
        price: 59.99,
        image: image6,
        description: "Enhance your gaming experience with this ergonomic wireless gaming mouse. It offers precise tracking, customizable buttons, and RGB lighting.",
        category: "electronics",
        weight: "0.15 kg",
        size: "Medium",
        material: "Plastic"
    },
    {
        id: 7,
        title: "Women's Floral Print Dress",
        price: 39.99,
        image: image7,
        description: "Step out in style with this beautiful floral print dress. Made from soft and breathable fabric, it's perfect for any occasion.",
        category: "fashion",
        weight: "0.25 kg",
        size: "Large",
        material: "Polyester"
    },
    {
        id: 8,
        title: "Kitchen Knife Set",
        price: 69.99,
        image: image8,
        description: "Upgrade your culinary skills with this high-quality kitchen knife set. The set includes a variety of knives suitable for different tasks, all stored in an elegant wooden block.",
        category: "home",
        weight: "1.0 kg",
        size: "Standard",
        material: "Stainless Steel"
    },
    {
        id: 9,
        title: "Organic Facial Cleanser",
        price: 24.99,
        image: image9,
        description: "Pamper your skin with this gentle and nourishing organic facial cleanser. It effectively removes impurities without stripping the skin's natural moisture.",
        category: "beauty",
        weight: "0.2 kg",
        size: "Small",
        material: "Liquid"
    },
    {
        id: 10,
        title: "Yoga Mat and Bag Set",
        price: 49.99,
        image: image10,
        description: "Elevate your yoga practice with this eco-friendly set. The mat offers excellent grip and cushioning, while a bag makes it easy to carry your mat wherever you go.",
        category: "sports",
        weight: "1.2 kg",
        size: "Medium",
        material: "Rubber"
    },
    {
        id: 11,
        title: "Bluetooth Portable Speaker",
        price: 79.99,
        image: image11,
        description: "Enjoy high-quality audio on the go with this portable Bluetooth speaker. It features a sleek design, long battery life, and excellent sound performance.",
        category: "electronics",
        weight: "0.5 kg",
        size: "Medium",
        material: "Plastic"
    },
    {
        id: 12,
        title: "Men's Casual Sneakers",
        price: 59.99,
        image: image12,
        description: "Step out in style and comfort with these trendy men's casual sneakers. They are made with breathable materials and offer excellent support for all-day wear.",
        category: "fashion",
        weight: "0.7 kg",
        size: "Medium",
        material: "Textile"
    },
    {
        id: 13,
        title: "Home Office Desk",
        price: 199.99,
        image: image13,
        description: "Create a productive workspace with this stylish and functional home office desk. It offers ample storage space, a sturdy construction, and a sleek design.",
        category: "home",
        weight: "20 kg",
        size: "Large",
        material: "Wood"
    },
    {
        id: 14,
        title: "Natural Body Lotion",
        price: 14.99,
        image: image14,
        description: "Nourish and hydrate your skin with this natural body lotion. It is enriched with organic ingredients and leaves your skin feeling soft and smooth.",
        category: "beauty",
        weight: "0.3 kg",
        size: "Small",
        material: "Cream"
    },
    {
        id: 15,
        title: "Camping Tent",
        price: 149.99,
        image: image15,
        description: "Experience the great outdoors with this durable and spacious camping tent. It features easy setup, weather-resistant materials, and ample ventilation.",
        category: "sports",
        weight: "3.5 kg",
        size: "Large",
        material: "Polyester"
    }
];

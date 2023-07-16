import { StaticImageData } from "next/image";
import image1 from "./assets/wireless-earbuds.webp"
import image2 from "./assets/leather-wallet.webp"
import image3 from "./assets/cushion-set.webp"
import image4 from "./assets/facial-serum.webp"
import image5 from "./assets/camping-backpack.webp"
import image6 from './assets/gaming-mouse.webp'
import image7 from "./assets/floral-dress.webp"
import image8 from "./assets/knife-set.webp"
import image9 from "./assets/face-cleanser.webp"
import image10 from './assets/yoga-mat.webp'
import image11 from './assets/bluetooth-speaker.webp'
import image12 from "./assets/man-sneaker.webp"
import image13 from './assets/office-desk.webp'
import image14 from './assets/body-lotion.webp'
import image15 from "./assets/camping-tent.webp"
import image16 from "./assets/thermostat.webp"
import image17 from "./assets/handbag.webp"
import image18 from "./assets/led-lamp.webp"
import image19 from "./assets/facial-serum.webp"
import image20 from "./assets/dumbbell.webp"
import image21 from "./assets/car-speaker.webp"
import image22 from "./assets/classic-shirt.webp"
import image23 from "./assets/candle-set.webp"
import image24 from "./assets/face-mascara.webp"
import image25 from "./assets/trekking-pole.webp"
import image26 from "./assets/portable-speaker.webp"
import image27 from "./assets/trench-coat.webp"
import image28 from "./assets/cookware-set.webp"
import image29 from "./assets/lip-balm.webp"
import image30 from "./assets/cycling-helmet.webp"




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
    },
    {
        id: 16,
        title: "Smart Wi-Fi Thermostat",
        price: 129.99,
        image: image16,
        description: "Control your home's temperature from anywhere with this smart Wi-Fi thermostat. It offers energy-saving features and intuitive app control.",
        category: "electronics",
        weight: "0.3 kg",
        size: "Small",
        material: "Plastic"
    },
    {
        id: 17,
        title: "Women's Stylish Handbag",
        price: 79.99,
        image: image17,
        description: "Complete your outfit with this chic and versatile women's handbag. It features multiple compartments and a fashionable design.",
        category: "fashion",
        weight: "0.5 kg",
        size: "Medium",
        material: "Leather"
    },
    {
        id: 18,
        title: "LED Desk Lamp",
        price: 39.99,
        image: image18,
        description: "Illuminate your workspace with this sleek LED desk lamp. It offers adjustable brightness, color temperature, and USB charging port.",
        category: "home",
        weight: "0.8 kg",
        size: "Small",
        material: "Metal"
    },
    {
        id: 19,
        title: "Hydrating Facial Sheet Mask Set",
        price: 19.99,
        image: image19,
        description: "Treat your skin to deep hydration with this set of nourishing facial sheet masks. Each mask is infused with revitalizing ingredients for a radiant complexion.",
        category: "beauty",
        weight: "0.1 kg",
        size: "Small",
        material: "Fabric"
    },
    {
        id: 20,
        title: "Adjustable Dumbbell Set",
        price: 249.99,
        image: image20,
        description: "Build strength and tone muscles with this adjustable dumbbell set. It allows you to customize your weight resistance for various exercises.",
        category: "sports",
        weight: "25 kg",
        size: "Medium",
        material: "Metal"
    },
    {
        id: 21,
        title: "Bluetooth Car Speakerphone",
        price: 59.99,
        image: image21,
        description: "Stay connected while driving with this Bluetooth car speakerphone. It provides hands-free calling and high-quality audio for a safer and more enjoyable drive.",
        category: "electronics",
        weight: "0.2 kg",
        size: "Small",
        material: "Plastic"
    },
    {
        id: 22,
        title: "Men's Classic Oxford Shirt",
        price: 49.99,
        image: image22,
        description: "Look sharp and sophisticated with this timeless men's classic Oxford shirt. It is made from premium cotton fabric and offers a comfortable fit.",
        category: "fashion",
        weight: "0.3 kg",
        size: "Medium",
        material: "Cotton"
    },
    {
        id: 23,
        title: "Scented Soy Candle Set",
        price: 29.99,
        image: image23,
        description: "Create a relaxing ambiance with this set of scented soy candles. Each candle is hand-poured and offers a long-lasting and delightful fragrance.",
        category: "home",
        weight: "0.5 kg",
        size: "Standard",
        material: "Soy Wax"
    },
    {
        id: 24,
        title: "Volumizing Mascara",
        price: 12.99,
        image: image24,
        description: "Achieve fuller lashes with this volumizing mascara. Its unique formula enhances volume, length, and curl for a dramatic eye look.",
        category: "beauty",
        weight: "0.05 kg",
        size: "Small",
        material: "Liquid"
    },
    {
        id: 25,
        title: "Trekking Pole Set",
        price: 79.99,
        image: image25,
        description: "Conquer any trail with this durable and adjustable trekking pole set. It provides stability, support, and reduces strain on your joints during hiking adventures.",
        category: "sports",
        weight: "0.8 kg",
        size: "Large",
        material: "Aluminum"
    },
    {
        id: 26,
        title: "Portable Bluetooth Speaker",
        price: 69.99,
        image: image26,
        description: "Take your music anywhere with this portable Bluetooth speaker. It delivers immersive sound, long battery life, and a compact design for easy portability.",
        category: "electronics",
        weight: "0.5 kg",
        size: "Medium",
        material: "Plastic"
    },
    {
        id: 27,
        title: "Women's Classic Trench Coat",
        price: 129.99,
        image: image27,
        description: "Stay stylish and protected from the elements with this classic trench coat for women. It is crafted from water-resistant fabric and features a timeless design.",
        category: "fashion",
        weight: "1.2 kg",
        size: "Large",
        material: "Polyester"
    },
    {
        id: 28,
        title: "Stainless Steel Cookware Set",
        price: 199.99,
        image: image28,
        description: "Upgrade your kitchen with this premium stainless steel cookware set. It includes a variety of pots, pans, and utensils for all your cooking needs.",
        category: "home",
        weight: "5.0 kg",
        size: "Standard",
        material: "Stainless Steel"
    },
    {
        id: 29,
        title: "Moisturizing Lip Balm Trio",
        price: 9.99,
        image: image29,
        description: "Keep your lips hydrated and smooth with this moisturizing lip balm trio. Each balm is infused with nourishing ingredients and offers a hint of color.",
        category: "beauty",
        weight: "0.02 kg",
        size: "Small",
        material: "Balm"
    },
    {
        id: 30,
        title: "Cycling Helmet",
        price: 59.99,
        image: image30,
        description: "Ensure your safety on the road with this high-quality cycling helmet. It features a lightweight and aerodynamic design for maximum comfort and protection.",
        category: "sports",
        weight: "0.3 kg",
        size: "Medium",
        material: "Polycarbonate"
    },

];

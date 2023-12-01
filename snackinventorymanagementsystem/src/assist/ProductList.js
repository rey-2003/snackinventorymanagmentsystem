import Milktea from "../assets/milktea.jpg";
import Fries from "../assets/fries.jpg";
import Popcorn from "../assets/popcorn.jpg";
import Siomai from "../assets/siomai.jpg";
import Ngoyong from "../assets/ngoyong.jpg";
import Tempura from "../assets/tempura.jpg";
import Milkshake from "../assets/milkshake.jpg";
import Siopao from "../assets/siopao.jpg";
import FruitJuice from "../assets/fruitjuice.jpg";
import IceCoffee from "../assets/icecoffee.jpg";

export const ProductList = [
    {
        name: "MILKTEA",
        image: Milktea,
        sizeOptions: ["Small", "Medium", "Large"],
        flavorOptions: ["Cookies & Cream", "Red Velvet", "Dark Chocolate", "Taro", "Double Dutch", "Hazelnut", "Black Forest", 
        "Mango Cheesecake", "Cheesy Mango", "Hokkaido", "Okinawa", "Mocha", "Ube", "Wintermelon"],
        price: "P32",
    },
    {
        name: "FRIES",
        image: Fries,
        sizeOptions: ["Small", "Medium", "Large"],
        flavorOptions: ["Sour Cream", "Barbeque", "Cheese", "Plain Salty"],
        price: "P35",
    },
    {
        name: "POPCORN",
        image: Popcorn,
        sizeOptions: ["Small", "Medium", "Large"],
        flavorOptions: ["Caramelize", "Cheese", "Regular"],
        price: "P10",
    },
      {
        name: "SIOMAI",
        image: Siomai,
        sizeOptions: ["STEAMED- 3pcs/P30", "FRIED- 3pcs/P35"],
        flavorOptions: ["Pork", "Chicken", "Beef", "Japanese"],
        price: "P30", 
    },
      {
        name: "NGOYONG",
        image: Ngoyong,
        sizeOptions: ["3pcs-P25"],
        flavorOptions: ["Vege", "Chicken", "BEEF"],
        price: "P9",
      },
      {
        name: "TEMPURA",
        image: Tempura,
        sizeOptions: ["4pcs-P20", "9pcs-P40"],
        flavorOptions: ["Sweet", "Chili", "Extra Hot Chili"],
        price: "P5",
      },
      {
        name: "MILKSHAKE",
        image: Milkshake,
        sizeOptions: ["Small", "Medium", "Large"],
        flavorOptions: ["Cookies & Cream", "Mango", "Orange", "Melontastic", "Mocha", "Buko Pandan", "Avocado", "Vanilla", "Strawberry", "Ube", "Chocodrops"],
        price: "P60",
    },
      {
        name: "SIOPAO",
        image: Siopao,
        sizeOptions: [""],
        flavorOptions: ["Pork", "Chicken", "Beef"],
        price: "P15",
    },
      {
        name: "FRUIT JUICE",
        image: FruitJuice,
        sizeOptions: ["16oz"],
        flavorOptions: ["Calamansi Lemon", "Green Apple", "Blueberry", "Blue Lemonade", "Four Seasons"],
        price: "P35",
    },
      {
        name: "ICE COFFEE",
        image: IceCoffee,
        sizeOptions: ["8oz", "16oz"],
        flavorOptions: ["Coffee Original", "Coffee Choco", "Coffee Malunggay", "Black Forest", "Strawberry Latte"],
        price: "P30",
    },
];

export default ProductList;
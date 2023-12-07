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
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Cookies & Cream", "Red Velvet", "Dark Chocolate", "Taro", "Double Dutch", "Hazelnut", "Black Forest", 
        "Mango Cheesecake", "Cheesy Mango", "Hokkaido", "Okinawa", "Mocha", "Ube", "Wintermelon"],
        price: 32,
        stock: 100,
    },
    {
        name: "FRIES",
        image: Fries,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Sour Cream", "Barbeque", "Cheese", "Plain Salty"],
        price: 35,
        stock: 100,
    },
    {
        name: "POPCORN",
        image: Popcorn,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Caramelize", "Cheese", "Regular"],
        price: 10,
        stock: 100,
    },
      {
        name: "SIOMAI",
        image: Siomai,
        sizeOptions: ["*Select*", "STEAMED- 3pcs/P30", "FRIED- 3pcs/P35"],
        flavorOptions: ["*Select*", "Pork", "Chicken", "Beef", "Japanese"],
        price: 30, 
        stock: 100,
    },
      {
        name: "NGOYONG",
        image: Ngoyong,
        sizeOptions: ["*Select*", "3pcs-P25"],
        flavorOptions: ["*Select*", "Vege", "Chicken", "BEEF"],
        price: 9,
        stock: 100,
      },
      {
        name: "TEMPURA",
        image: Tempura,
        sizeOptions: ["*Select*", "4pcs-P20", "9pcs-P40"],
        flavorOptions: ["*Select*", "Sweet", "Chili", "Extra Hot Chili"],
        price: 5,
        stock: 100,
      },
      {
        name: "MILKSHAKE",
        image: Milkshake,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Cookies & Cream", "Mango", "Orange", "Melontastic", "Mocha", "Buko Pandan", "Avocado", "Vanilla", "Strawberry", "Ube", "Chocodrops"],
        price: 60,
        stock: 100,
    },
      {
        name: "SIOPAO",
        image: Siopao,
        sizeOptions: ["*Select*"],
        flavorOptions: ["*Select*", "Pork", "Chicken", "Beef"],
        price: 15,
        stock: 100,
    },
      {
        name: "FRUIT JUICE",
        image: FruitJuice,
        sizeOptions: ["*Select*", "16oz"],
        flavorOptions: ["*Select*", "Calamansi Lemon", "Green Apple", "Blueberry", "Blue Lemonade", "Four Seasons"],
        price: 35,
        stock: 100,
    },
      {
        name: "ICED COFFEE",
        image: IceCoffee,
        sizeOptions: ["*Select*", "8oz", "16oz"],
        flavorOptions: ["*Select*", "Coffee Original", "Coffee Choco", "Coffee Malunggay", "Black Forest", "Strawberry Latte"],
        price: 30,
        stock: 100,
    },
];

export default ProductList;
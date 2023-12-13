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
        price: {
      Small: 32,
      Medium: 45,
      Large: 60,
    },
        stock: {
      Small: 10,
      Medium: 15,
      Large: 20,
      },
    },
    {
        name: "FRIES",
        image: Fries,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Sour Cream", "Barbeque", "Cheese", "Plain Salty"],
        price:{
      Small: 35,
      Medium: 50,
      Large: 65,
    },
        stock: {
          Small: 30,
      Medium: 10,
      Large: 25,
          },
    },
    {
        name: "POPCORN",
        image: Popcorn,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Caramelize", "Cheese", "Regular"],
        price: {
      Small: 10,
      Medium: 25,
      Large: 40,
    },
        stock: {
          Small: 40,
      Medium: 5,
      Large: 10,
        },
    },
      {
        name: "SIOMAI",
        image: Siomai,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Pork", "Chicken", "Beef", "Japanese"],
        price: {
      Small: 20,
      Medium: 30,
      Large: 10,
    },
 
        stock: {
         Small: 15,
      Medium: 25,
      Large: 15,
        },
    },
      {
        name: "NGOYONG",
        image: Ngoyong,
        sizeOptions: ["*Select*", "Small", "Large"],
        flavorOptions: ["*Select*", "Vege", "Chicken", "BEEF"],
        price: {
          Small: 9,
          Large: 25,
        },

        stock: {
         Small: 12,
      Medium: 18,
      Large: 12,
        },
      },
      {
        name: "TEMPURA",
        image: Tempura,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Sweet", "Chili", "Extra Hot Chili"],
        price: {
          Small: 5,
          Medium: 20,
          Large: 40,
        },
        stock: {
      Small: 40,
      Medium: 53,
      Large: 30,
        },
      },
      {
        name: "MILKSHAKE",
        image: Milkshake,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Cookies & Cream", "Mango", "Orange", "Melontastic", "Mocha", "Buko Pandan", "Avocado", "Vanilla", "Strawberry", "Ube", "Chocodrops"],
        price:{
      Small: 60,
      Medium: 80,
      Large: 110,
    },

        stock:{
       Small: 17,
      Medium: 29,
      Large: 10,
        },
    },
      {
        name: "SIOPAO",
        image: Siopao,
        sizeOptions: ["*Select*", "Small"],
        flavorOptions: ["*Select*", "Pork", "Chicken", "Beef"],
        price: {
          Small: 15
        },
        stock: {
        Small: 10,
      },
    },     
      {
        name: "FRUIT JUICE",
        image: FruitJuice,
        sizeOptions: ["*Select*", "Small", "Large"],
        flavorOptions: ["*Select*", "Calamansi Lemon", "Green Apple", "Blueberry", "Blue Lemonade", "Four Seasons"],
        price:{
          Small: 15,
          Medium: 35,
    },
        stock: {

      Small: 10,
      Medium: 15,
        },
      },
    
      {
        name: "ICED COFFEE",
        image: IceCoffee,
        sizeOptions: ["*Select*", "Small", "Medium", "Large"],
        flavorOptions: ["*Select*", "Coffee Original", "Coffee Choco", "Coffee Malunggay", "Black Forest", "Strawberry Latte"],
        price: {
          Small: 15,
          Medium: 30,
          Large: 45,
        },
        stock: {
      Small: 18,
      Medium: 11,
      Large: 14,
          },
    },
];

export default ProductList;
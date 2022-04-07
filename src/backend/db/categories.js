import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "tshirts",
    name: "Dragon Ball Z",
    img: "https://saiyanshop.netlify.app/Assets/img/img1.webp",
  },
  {
    _id: uuid(),
    categoryName: "tshirts",
    name: "My Hero Academia",
    img: "https://saiyanshop.netlify.app/Assets/img/img2.jpg",
  },
  {
    _id: uuid(),
    categoryName: "tshirts",
    name: "Dr. Stone",
    img: "https://saiyanshop.netlify.app/Assets/img/img3.webp",
  },
  {
    categoryName: "tshirts",
    name: "Haikyuu",
    img: "https://saiyanshop.netlify.app/Assets/img/img4.webp",
  },
  {
    categoryName: "tshirts",
    name: "Death Note",
    img: "https://saiyanshop.netlify.app/Assets/img/img5.webp",
  },
  {
    categoryName: "tshirts",
    name: "Attack On Titan",
    img: "https://saiyanshop.netlify.app/Assets/img/img6.jpg",
  },
];

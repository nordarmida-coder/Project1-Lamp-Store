import filamentImg from "./assets/filament.jpg";
import incandescentImg from "./assets/incandescent.jpg";
import phytoImg from "./assets/phyto.jpg";
import ledImg from "./assets/led.jpg";
import led1Img from "./assets/led1.jpg";

const products = [
  {
    id: 1,
    category: "Filament",
    name: "Filament Vintage Lamp",
    brightness: "Warm white 2700K",
    power: "5W",
    socket: "E27",
    price: 9.99,
    image: filamentImg
  },
  {
    id: 2,
    category: "Incandescent",
    name: "Classic Incandescent Lamp",
    brightness: "Soft white 3000K",
    power: "60W",
    socket: "E27",
    price: 0.99,
    image: incandescentImg
  },
  {
    id: 3,
    category: "Phyto",
    name: "Plant Grow Lamp",
    brightness: "Full spectrum 4000K",
    power: "10W",
    socket: "E27",
    price: 5.50,
    image: phytoImg
  },
  {
    id: 4,
    category: "LED",
    name: "Classic LED Lamp",
    brightness: "White 5000K",
    power: "8W",
    socket: "E27",
    price: 2.50,
    image: ledImg
  },
  {
    id: 5,
    category: "LED",
    name: "Small LED Globe Lamp",
    brightness: "Yellow 3000K",
    power: "4W",
    socket: "E14",
    price: 1.50,
    image: led1Img
  },
];

export default products;
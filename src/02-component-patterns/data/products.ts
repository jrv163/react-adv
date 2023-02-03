import { Product } from "../interfaces/interfaces";


const product1 = {
    id: '1',
    title: 'Coffee Mug - Cards',
    img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug2 - Meme',
  img: './coffee-mug2.png'
}

export const products: Product[] = [ product1, product2 ];

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext } from 'react';
import { ProductContextProps, PropsCardProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;  // proveedor de información
 

export const ProductCard = ({ children, product }: PropsCardProps) => {

    const { counter, increaseBy } = useProduct(); 


  return (
    
            
            <Provider value={{  // se necesita tiparlo, porque está como generico
                counter,
                increaseBy,
                product
            }} >
                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="coffe mug" /> */}
                <div className={ styles.productCard }>
                { children }

                {/* <ProductImage img={ product.img }/>

                <ProductTitle title={ product.title } />

                <ProductButtons 
                increaseBy={ increaseBy } 
                counter={ counter } 
                /> */}
                </div>
            </Provider>
    
  )
}




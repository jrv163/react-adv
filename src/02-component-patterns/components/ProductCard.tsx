
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext, ReactElement } from 'react';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;  // proveedor de información


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void; 
    value?: number;
}
 

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value }); 


  return (
    
            
            <Provider value={{  // se necesita tiparlo, porque está como generico
                counter,
                increaseBy,
                product
            }} >
                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="coffe mug" /> */}
                <div className={`${styles.productCard} ${ className } `}
                style={ style }
                >
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




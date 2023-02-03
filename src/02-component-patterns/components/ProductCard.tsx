
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;  // proveedor de información


export interface Props {
    //children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void; 
    value?: number;
    initialValues?: InitialValues;
}
 

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset  } 
    = useProduct({ onChange, product, value, initialValues }); 


  return (
    
            
            <Provider value={{  // se necesita tiparlo, porque está como generico
                counter,
                increaseBy,
                product,
                maxCount
            }} >
                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="coffe mug" /> */}
                <div className={`${styles.productCard} ${ className } `}
                style={ style }
                >
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    
                    increaseBy,
                    reset
                }) 
                }

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




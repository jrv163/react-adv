import styles from '../styles/styles.module.css';


// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: (value: number) => void;
// }

import { useCallback, useContext } from "react";
import { ProductContext } from './ProductCard';


export interface Props {
    className?: string;
    style?: React.CSSProperties,
   
}

export const ProductButtons = ( { className, style }: Props ) => {

    // TODO: maxCount

    const { increaseBy, counter, maxCount } = useContext( ProductContext );

     
       const isMaxReached = useCallback(
            () => !!maxCount && counter === maxCount,
            [counter, maxCount],
        )
        
    // TODO: isMaxReached = useCallback, [ counter, maxCount ]
    // true, si el count === maxCount

    return (

        <div className={ `${styles.buttonsContainer} ${ className }`}
        style={ styles }
        >

            <button 
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> 
            { counter }
            </div>

            <button 
                className={ `${styles.buttonMinus}  ${ isMaxReached() && styles.disable }` }
                onClick={ () => increaseBy( +1 ) }> + </button>            
        </div>
    )
}
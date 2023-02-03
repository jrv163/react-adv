import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMonunted = useRef(false);

    //console.log(initialValues?.count);

    const increaseBy = ( value: number ) => {


        let newValue = Math.max( counter + value, 0 )

        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }
        // if ( newValue === initialValues?.maxCount ) {
        //     return;
        // } else {
        //       setCounter( newValue );
        // }

        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value )
    } 

    useEffect(() => {

        if ( !isMonunted.current ) return ;
            setCounter( value )
    }, [ value ]);

   
    //  useEffect(() => {
    //     isMonunted.current = true;
    // }, [])
    
    

    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}

import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = ''} ) => {

    const { product } = useContext( ProductContext ); // el product Context es mi contexto

    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }



    return (
        <img className={ styles.productImg } src={ imgToShow } alt="product-img" />
    );
}

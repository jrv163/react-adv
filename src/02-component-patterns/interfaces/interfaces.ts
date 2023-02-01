import { ReactElement } from 'react';


export interface PropsCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

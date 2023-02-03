
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

import '../styles/custom-styles.css';



export const ShoppingPage = () => {


 const { shoppingCart, onProductCountChange } = useShoppingCart();


  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }} >


              {
                products.map( ( product ) => (
                  <ProductCard 
                    key={ product.id }
                    product={ product }
                    className="bg-dark"
                    value={ shoppingCart[product.id]?.count || 0  }
                    onChange={  onProductCountChange }
                  >
                    <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className='text-white' />
                    <ProductButtons className='custom-buttons' />
                  </ProductCard>
                ))
              
              }

        </div>

        <div className="shopping-cart">

                    {/* no se puede hacer el shoppingCart.map() , porque el shoppingCart es un objeto; por lo tanto, se debe utilizar el Object.entries( shopping ).map(),  para mapear las entradas de un objeto
                    el map muestra que las entradas son ([  key, product ]) y se hace un retorno implicito  */}

                  {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (

                          <ProductCard 
                              key={ key }
                              product={ product }
                              className="bg-dark"
                              style={{width: '100px'
                              }}
                              onChange={  onProductCountChange }
                              value={ product.count }

                          >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className='custom-buttons' 
                                style={{
                                  display:'flex',
                                  justifyContent: 'center'
                                }}    
                            />
                            </ProductCard>
                        ))
                  }

        </div>
        
    </div>
  )
}

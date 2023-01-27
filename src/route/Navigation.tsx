import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";

import logo from '../../src/logo.svg';




//import { LazyPage1, LazyPage2,LazyPage3  } from "../01-lazyload/pages";


export const Navigation = () => {
  return (
     <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout" >
                <nav>
                    <img src={ logo } alt="logo React" />

                                                        {/* rutas dinamicas */}
                    <ul>
                        {
                        routes.map(  ({ to, name }) => {
                            return (
                                    <li key={ to }>
                                        <NavLink 
                                            to={ to }
                                            className={ ({ isActive }  ) => isActive ? 'nav-active' : '' } >
                                            { name }
                                        </NavLink>
                                    </li>
                                )   
                            })
                        }
                    
                                                            {/* Rutas estáticas */}
                                {/* <li>
                                <NavLink to="/lazy2" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/lazy3" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                                </li> */}
                    </ul>
                </nav>

                    <Routes>
                        {
                            routes.map( ({ path, Component }) => {
                                return (
                                    <Route key={ path }
                                    path={ path } 
                                    element={ <Component /> } />
                                )
                            })
                        }

                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } /> 
                        {/* to={ routes[0].to } toma la ruta que se encuentra en posición cero, o de acuerdo a la posición de la ruta colocar el numero correspondiente [ x ] */}

                    </Routes>
            </div>

        </BrowserRouter>
     </Suspense>   
        
  )
}

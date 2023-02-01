import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from '../../src/logo.svg'
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout" >
            <nav>
                <img src={ logo } alt="logo React" />

                <ul>
                    <li>
                        <NavLink to="/shopping" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' } >Shopping</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to="/about" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/users" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

                <Routes>
                    <Route path="/about" element={ <h1>About Page</h1> } />
                    <Route path="/users" element={ <h1>User Page</h1> } />
                    <Route path="/shopping" element={ <ShoppingPage />} />

                    <Route path="/*" element={ <Navigate to="/shopping" replace /> } />

                </Routes>
        </div>

    </BrowserRouter>
  )
}

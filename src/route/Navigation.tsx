import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from '../../src/logo.svg'

import { FormikBasicPage, FormikComponents, FormikAbstractation, FormikYupPage, 
    RegisterPage } from '../03-forms/pages'
 

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout" >
            <nav>
                <img src={ logo } alt="logo React" />

                <ul>
                    <li>
                        <NavLink to="/register" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to="/formik-basic" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-yup" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-Components" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-Abstractation" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
                    </li>

                    <li>
                        <NavLink to="/users" className={ ({ isActive }  ) => isActive ? 'nav-active' : '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

                <Routes>
                    <Route path="/formik-basic" element={ <FormikBasicPage/> } />
                    <Route path="/formik-yup" element={ <FormikYupPage /> } />
                    <Route path="/formik-Components" element={ <FormikComponents /> } />
                    <Route path="/formik-Abstractation" element={ <FormikAbstractation /> } />
                    <Route path="/users" element={ <h1>User Page</h1> } />
                    <Route path="/register" element={ <RegisterPage/> } />

                    <Route path="/*" element={ <Navigate to="/register" replace /> } />

                </Routes>
        </div>

    </BrowserRouter>
  )
}

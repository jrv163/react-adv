import {  Formik, Form,  } from 'formik'
//import { FormikErrors } from 'formik/dist/types'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'


// instalar yup schema con npm i yup, para crear un schema de validaciones 

import '../styles/styles.css'


export const FormikAbstractation = () => {



  return (
    <div>
        <h1>Formik Abstractation</h1>


            <Formik
                initialValues={{ 
                    firstName: '',
                    lastName:'',
                    email: '',
                    terms: false,
                    jobType:''
                }}
                onSubmit={ ( values ) => {
                    console.log( values )
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string()  // Las propiedades deben ser igual a mi initialValues
                                    .max( 15, ' Must be 15 characters or less' )
                                    .required( 'Require' ),
                     lastName: Yup.string()
                                    .max(15, 'Must be 15 characters or less ')
                                    .required('Require'),
                     email: Yup.string()
                                    .email( 'Must be a valid email' )
                                    .required('Required'),
                     terms: Yup.boolean()
                                .oneOf([true], 'Must accept the conditions')
                                .required('Require'),
                    jobType: Yup.string()
                                .notOneOf( ['IT Junior'], ' This option is not allowed ' )
                                .required('Require')


                }) 
            }
            >
                { (formik) => (

                        <Form>

                            {/* name debe hacer match con el name del initialValues en este caso con el firstName */}
                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder='Jamer'
                            />    

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder='Rodriguez'
                            />    
                            
                            <MyTextInput 
                                label="email" 
                                name="email" 
                                placeholder='jamer@google.com'
                                type='email'  // colocar el tipo email, teniendo en cuenta que es opcional//
                            />    

                            <MySelect name="jobType" label="Job Type">
                                    <option value="">Pick something</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="IT Senior">IT Senior</option>
                                    <option value="IT Junior">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms & Conditions" name="terms" />
                                                  
                            <button type='submit' >
                                Submit
                            </button>
                    
                         </Form>

                    )
                }
                            
            </Formik>
        
    </div>
  )
}
            
                           
                            




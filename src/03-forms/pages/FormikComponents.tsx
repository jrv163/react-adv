import {  Formik, Field, Form, ErrorMessage } from 'formik'
//import { FormikErrors } from 'formik/dist/types'
import * as Yup from 'yup'

// instalar yup schema con npm i yup, para crear un schema de validaciones 

import '../styles/styles.css'


export const FormikComponents = () => {



  return (
    <div>
        <h1>Formik Components</h1>


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
                            <label htmlFor="firstName">First Name</label>
                            <Field name='firstName' type='text'/>
                            <ErrorMessage name='firstName' component='span'/>
                    
                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text'/>
                            <ErrorMessage name='lastName' component='span'/>
                                
                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text'/>
                            <ErrorMessage name='email' component='span' />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name='jobType' as='select'>
                                    <option value="">Pick something</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="IT Senior">IT Senior</option>
                                    <option value="IT Junior">IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

                            <label htmlFor="terms">Terms and Conditions</label>
                            <Field name='terms' type='checkbox'/>
                            <ErrorMessage name='terms' component='span' />

                
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
            



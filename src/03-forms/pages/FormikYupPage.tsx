import { useFormik } from 'formik'
//import { FormikErrors } from 'formik/dist/types'
import * as Yup from 'yup'

// instalar yup schema con npm i yup, para crear un schema de validaciones 

import '../styles/styles.css'

// interface FormValues {
//     firstName: string,
//     lastName: string,
//     email: string
// }


export const FormikYupPage = () => {


const {  handleSubmit, errors, touched, getFieldProps }  = useFormik({
    initialValues: {
        firstName: '',
        lastName:'',
        email: ''
    },
    onSubmit:(  values) => {
        console.log(values)
    },
    validationSchema: Yup.object({
        firstName: Yup.string()  // Las propiedades deben ser igual a mi initialValues
                        .max( 15, ' Must be 15 characters or less' )
                        .required( 'Require' ),
        lastName: Yup.string()
                        .max(15, 'Must be 15 characters or less ')
                        .required('Require'),
        email: Yup.string()
                    .email( 'Must be a valid email' )
                    .required('Required')
                        
                        

    })
});


  return (
    <div>
        <h1>Formik Yup</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                // name='firstName'  
                // onBlur={ handleBlur }
                // onChange={ handleChange }
                // value={ values.firstName }

                { ...getFieldProps('firstName') }  // the getFieldProps is a function when we use the spread operator contains the properties name, onBlur, onChange and value.
            />

          { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="firstName">Last Name</label>
            <input 
                type="text" 
                // name='lastName'
                // onBlur={ handleBlur }
                // onChange={ handleChange }
                // value={ values.lastName }

                { ...getFieldProps('lastName') } 
            />

                { touched.lastName && errors.firstName && <span>{ errors.lastName }</span>}


            <label htmlFor="firstName">Email</label>
            <input 
                type="email" 
                // name='email'
                // onBlur={ handleBlur }
                // onChange={ handleChange }
                // value={ values.email }

                { ...getFieldProps('email') } 
            />

            { touched.email && errors.email && <span>{ errors.email }</span>}
               

            <button type='submit' >
                Submit
            </button>

        </form>
    </div>
  )
}

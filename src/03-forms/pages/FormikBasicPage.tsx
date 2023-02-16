import { useFormik } from 'formik'
import { FormikErrors } from 'formik/dist/types'

import '../styles/styles.css'

interface FormValues {
    firstName: string,
    lastName: string,
    email: string
}


export const FormikBasicPage = () => {

    const validate = ( {firstName, lastName, email}: FormValues ) => {

        const errors: FormikErrors<FormValues> = {};

        if ( !firstName ) {
            errors.firstName = 'Require';
        } else if( firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 character or less';
        }

        if ( !lastName ) {
            errors.lastName = 'Require';
        } else if( lastName.length >= 10 ) {
            errors.lastName = 'Must be 15 character or less';
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }

        return errors ;

    }

  // UseFormik se debe inicializar con un objeto //
  
const { handleChange, values, handleSubmit, errors,touched, handleBlur }  = useFormik({
    initialValues: {
        firstName: '',
        lastName:'',
        email: ''
    },
    onSubmit:(  values) => {
        console.log(values)
    },
    validate
});


  return (
    <div>
        <h1>Formik basic tutorial</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name='firstName'
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.firstName }
            />

          { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="firstName">Last Name</label>
            <input 
                type="text" 
                name='lastName'
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.lastName }
            />

                { touched.lastName && errors.firstName && <span>{ errors.lastName }</span>}


            <label htmlFor="firstName">Email</label>
            <input 
                type="email" 
                name='email'
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.email }
            />

            { touched.email && errors.email && <span>{ errors.email }</span>}
               

            <button type='submit' >
                Submit
            </button>

        </form>
    </div>
  )
}

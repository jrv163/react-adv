import { ErrorMessage, useField } from 'formik';


interface Props {
    label: string;
    name: string;
    [x: string]: any   // comodín de tipo Any que devuelve cualquier cosa
}

export const MyCheckbox = ({ label, ...props }: Props ) => {

const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={ props.id || props.name }>
            { label }
            
          <input type="checkbox"  { ...field } { ...props } />
        </label>
        <ErrorMessage name={ props.name } component='span' className='chexbox-class'/> 

    </>

  )
}

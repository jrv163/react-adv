import { ChangeEvent, useState } from "react";


export const useForm = <T>(initState: T) => {

  // el setRegisterData es el unico que puede cambiar los valores
    const [formData, setFormData] = useState(initState);

    const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
        //console.log( event.target.value );
        setFormData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const reset = () => {
        setFormData({...initState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  return {
        ...formData,
        // Properties
       formData,


        // metodos
        isValidEmail,
        onChange,
        reset,
    
  }
}

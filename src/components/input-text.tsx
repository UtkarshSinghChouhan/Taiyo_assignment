import { FieldError } from 'react-hook-form';
import { cn } from '../lib/utils';
import { forwardRef } from 'react';

export interface IInput{
    className ?: string;
    label ?: string;
    name ?: string;
    placeholder ?: string;
    error?: FieldError | undefined;
  }


const InputText = forwardRef<HTMLInputElement, IInput>(({label, name, className, placeholder, error, ...rest} , ref ) => {
    
    return(
        <>
            <fieldset className={className}>
                <label htmlFor={name} className='label'>{label}</label> 
                <input 
                    ref={ref}
                    type='text'  
                    id={name} 
                    name={name}   
                    placeholder={placeholder}
                    autoComplete='on' 
                    {...rest} 
                    className={cn('outline-none py-[10px] xl:py-[8.5px] pl-[19px] w-full text-sm xl:text-[13px] 2xl:text-base rounded-[5px] border border-[#EAEEF5]',!!error && 'error border-0')}
                />

                <p className='text-red-500 text-xs'>{error && error?.message}</p>
            </fieldset>
        </>
    )
})

InputText.displayName = "input-text"


export default InputText
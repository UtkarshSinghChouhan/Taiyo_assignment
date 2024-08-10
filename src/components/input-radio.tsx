import { FieldError } from 'react-hook-form';
import { cn } from '../lib/utils';
import { forwardRef } from 'react';

export interface IRadioInput {
    className?: string;
    label?: string;
    name?: string;
    options: Array<{ label: string; value: string }>;
    error?: FieldError | undefined;
    value?: string;
    onChange?: (value: string) => void;
}

const InputRadio = forwardRef<HTMLInputElement, IRadioInput>(({ label, name, className, options, error, value, onChange, ...rest }, ref) => {
    return (
        <>
            <fieldset className={className}>
                {label && (
                    <legend className='label'>
                        {label}
                    </legend>
                )}
                <div className="space-y-2">
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                ref={ref}
                                type="radio"
                                id={`${name}-${option.value}`}
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange?.(option.value)}
                                {...rest}
                                className={cn(
                                    'mr-2 outline-none',
                                    !!error && 'error border-0'
                                )}
                            />
                            <label htmlFor={`${name}-${option.value}`} className='text-sm xl:text-[13px] 2xl:text-base text-fs-header-text-gray'>
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
                <p className='text-red-500 text-xs'>{error && error?.message}</p>
            </fieldset>
        </>
    );
});

InputRadio.displayName = "radio-input";

export default InputRadio;

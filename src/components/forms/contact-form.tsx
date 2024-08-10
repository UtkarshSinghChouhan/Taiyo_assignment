import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { IContact } from '../../models/interface';
import { createContact, editContact } from '../../store/slices/contact-slice';
import ContactFormZod, { CONTACT_FORM_ZOD } from './form-resolvers/contact-form-resolver';
import { STATUS } from '../../models/enums';
import { Utils } from '../../lib/utils';
import InputText from '../input-text';
import InputRadio from '../input-radio';
import { ContactFormVariant } from '../../models/types';



export interface IContactForm{
  closeModal : React.Dispatch<React.SetStateAction<boolean>>
  formVariant ?: ContactFormVariant
  defaultData ?: IContact
}

const ContactForm = ({formVariant = 'create-contact' , defaultData, closeModal} : IContactForm) => {

  const dispatch = useDispatch();


  const { control, handleSubmit, reset, formState: { errors } } = useForm<ContactFormZod>({
    resolver: zodResolver(CONTACT_FORM_ZOD),
    defaultValues: {
      firstName: defaultData ? defaultData.firstName : '',
      lastName: defaultData ? defaultData.lastName :'',
      status: defaultData ? defaultData.status : STATUS.ACTIVE,
    },
  })

  const getBtnText = () : string => {
    if(formVariant === 'edit-contact'){
      return `Edit Contact`
    }else{
      return `Create Contact`
    }
  }

  const onSubmit = (data: ContactFormZod) => {

    
    if(formVariant === 'edit-contact'){

      const newContact: IContact = {
        id: defaultData?.id,
        ...data,
      };

      // Update New Contact in  the Redux Store
      dispatch(editContact(newContact));
      
    }else{
      const newContact: IContact = {
        id: Utils.generateUniqueId(),
        ...data,
      };
      
      // Create New Contact in  the Redux Store
      dispatch(createContact([newContact]));
    }

    // Resetting form post-submission
    reset()

    // Close the modal 
    closeModal(false)

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-1 flex flex-col gap-4 p-4'>
      {/* First Name */}
      <div>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputText
              {...field}
              error={error}
              placeholder={`Phil`}
              label={`First name`}
              name={`firstName`}
              className='w-full'
            />
          )}
        />
      </div>

      {/* Last Name */}
      <div>
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputText
              {...field}
              error={error}
              placeholder={`Phil`}
              label={`Last name`}
              name={`lastName`}
              className='w-full'
            />
          )}
        />
      </div>

      {/* Status */}
      <div>
        <Controller
          name="status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputRadio
              {...field}
              label='Status'
              options={[
                {label: "Active 🤒😷🤧", value: STATUS.ACTIVE},
                {label: "Inactive 😊👌🥰", value: STATUS.INACTIVE}
              ]}
              name='status'
              error={error}
              className='border w-full p-5 rounded-[5px]'
            />
          )}
        />
      </div>

      <button type="submit" className='w-full mt-auto border-[2px] border-fs-dark-border bg-fs-dark-border p-2 text-lg font-semibold text-white hover:text-fs-dark-border hover:bg-fs-beige'>{getBtnText()}</button>
    </form>
  );
};

export default ContactForm;

import { useState } from "react"
import { IContact } from "../models/interface"
import ContactForm from "./forms/contact-form"
import Modal from "./modal"
import { useDispatch } from "react-redux"
import { deleteContact } from "../store/slices/contact-slice"
import { cn } from "../lib/utils"
import { STATUS } from "../models/enums"

import healthy from '../assets/image/healthy.svg';
import sick from '../assets/image/sick.svg';

interface IContactCard{
    contactInfo : IContact
}

const ContactCard = ({contactInfo} : IContactCard) => {
    const {id, firstName, lastName, status} = contactInfo
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const dispatch = useDispatch();
  return (

    <>
        <div className="bg-fs-beige border-[2px] border-fs-dark-border flex flex-col gap-3 items-center justify-center p-2">


            <div className="flex  w-full justify-start items-center gap-2">

                <div className="shrink-0 ">
                    {status === STATUS.ACTIVE && <img className="w-12" src={sick} alt={status} />}
                    {status === STATUS.INACTIVE && <img className="w-12" src={healthy} alt={status} />}
                    
                </div>

                {/* Info */}
                <div className="flex items-start gap-2">
                    {/* Status */}
                    <span className={cn("mt-2 inline-block w-3 h-3 bg-green-500 rounded-full", status === STATUS.ACTIVE &&'bg-red-500')}></span>
                    {/* Name */}
                    <div title={`${firstName} ${lastName}`}> 
                        
                        <p className="cursor-default font-semibold text-[20px] text-fs-beige-bg-body line-clamp-1">{firstName}</p> 
                        <p className="cursor-default font-semibold text-[20px] line-clamp-1 -mt-1">{lastName}</p> 
                    </div>

                </div>

            </div>

            <div className="flex gap-3 w-full">
                <button className="flex-1 p-2 border-[2px] border-fs-dark-border bg-fs-dark-border text-fs-beige font-semibold" onClick={() => setModalOpen(true)}>Edit</button>
                <button className="flex-1 p-2 border-[2px] border-fs-dark-border hover:border-red-500 font-semibold hover:bg-red-500 hover:text-white" onClick={() => dispatch(deleteContact(id))}>Delete</button>

            </div>

             
        </div>


        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <ContactForm formVariant={'edit-contact'} defaultData={contactInfo} closeModal={setModalOpen} />
        </Modal>    
    </>
  )
}

export default ContactCard
import { useState } from "react"
import Modal from "../components/modal"
import ContactForm from "../components/forms/contact-form"
import Icon from "../components/icon"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import noDataImage from '../assets/icons/no-data.svg';
import { IContact } from "../models/interface"
import ContactCard from "../components/contact-card"


const Contacts = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const CONTACTS = useSelector((state: RootState) => state.contact.contacts);




    return (
        <>
            <div onClick={() => setModalOpen(true)} className="w-full flex flex-col">
                <button className="custom-cursor-pointer group hover:bg-fs-dark-border bg-fs-beige self-end p-2 border-2 border-fs-dark-border flex items-center justify-center active:scale-[.99]">
                    <Icon icon="add-contacts" />
                </button>

            </div>

            {/* Card Tiles */}
            <div className="flex-1 flex w-full items-center justify-center">
                {
                    !CONTACTS?.length ?

                    <img src={noDataImage} className="select-none" alt="no-data" width={500} /> :              
                    
                    <div className="mt-10 grid grid-cols-fs-contact w-full justify-evenly lg:justify-between gap-x-11 gap-y-12">

                        {
                            CONTACTS.map((contactInfo : IContact) => 
                                <ContactCard key={contactInfo.id} contactInfo={contactInfo} />
                            )
                        }
                    </div>
                }
                    
            </div>

            
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <ContactForm closeModal={setModalOpen} />
            </Modal>
        </>

    )
}

export default Contacts
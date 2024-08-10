import React, { ReactNode } from 'react'
import Icon from './icon';

interface IModal {
    children: ReactNode;
    modalOpen: boolean;
    setModalOpen: Function;
}

const Modal = ({ children, modalOpen, setModalOpen }: IModal) => {
    return (
        <>
            {modalOpen && (<div className="fixed z-50 inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40">

                <div className="min-h-[60%] w-full max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] overflow-auto border-[3px] border-fs-dark-border bg-white flex flex-col">

                    <div className='flex justify-end items-center px-2 py-2 h-8 w-full bg-fs-beige-bg-header'>

                        <button onClick={() => setModalOpen(false)} className='w-8 h-6 group p-1 hover:bg-red-500 flex items-center justify-center'>
                            <Icon icon="close" />               

                        </button>

                    </div>

                    {children}

                </div>
            </div>)}
        </>
    )
}

export default Modal
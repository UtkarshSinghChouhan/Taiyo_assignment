import { useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { ROUTE } from "../models/enums";



interface IHeader {
    menuCollapsed: boolean;
}

const Header = ({menuCollapsed} : IHeader) => {

    const location = useLocation()
    const pathName = location.pathname

    return (
        <>
            <header className={cn("z-30 fixed border-b-[2px] border-b-fs-dark-border bg-fs-beige-bg-body transition-[padding] left-0 right-0 top-0 flex h-[71px] items-center justify-start  pl-[90px] ", menuCollapsed &&    "lg:pl-[250px] xl:pl-[280px]")}>
                <h1 className="pl-5 font-semibold text-[24px] underline text-fs-beige">
                    {
                        pathName === ROUTE.CONTACT ? 'Contacts' : 'Insights'
                    } 
                </h1>
            </header>
            <div className="h-[71px] w-full shrink-0" />
        </>
    )
}

export default Header
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils';
import Icon from './icon';

interface ISidebar {
    menuCollapsed: boolean;
    setMenuCollapsed: Function;
}

const Sidebar = ({menuCollapsed, setMenuCollapsed} : ISidebar) => {
    return (
        <>
            <nav className={cn("z-40 transition-[width] fixed left-0 flex h-full w-[90px] flex-col items-center justify-start bg-fs-beige p-2 border-r-[2px] border-r-fs-dark-border", menuCollapsed && "w-[280px] lg:w-[250px] xl:w-[280px]")}>

                <div className="w-full pt-[71px]"></div>

                {/* Toggel */}
                <div
                    onClick={() => setMenuCollapsed(!menuCollapsed)}
                    className={
                        cn( 'custom-cursor-pointer cursor-pointer transition-[width]  fixed left-0 top-0 flex h-[71px] items-center justify-center border-b-[2px] border-r border-fs-divider-gray dark:border-fs-darktheme-border  border-b-fs-dark-border dark:border-b-fs-darktheme-border px-8 w-[90px]',
                        menuCollapsed && "w-[280px] lg:w-[250px] xl:w-[280px]"
                        )
                    }
                >
                    <Icon icon='hamburger-menu' />
                </div>

                


                {/* Navigation Links */}
                <div className='flex flex-col gap-5 mt-10 w-full bg-fs-beige-bg p-2'>

                    <Link to="/" className={cn('custom-cursor-pointer group bg-fs-beige hover:bg-fs-dark-border py-1 border-[2px] border-fs-dark-border flex gap-3 items-center justify-center active:scale-[.99] transition-transform', menuCollapsed && ' pl-4 justify-start')}>
                        <Icon icon='contacts' />
                        {
                            menuCollapsed &&
                            <p className='font-semibold text-lg group-hover:text-fs-beige'>Contacts</p>
                        }
                    </Link>


                    <Link to="/insights" className={cn('custom-cursor-pointer bg-fs-beige group hover:bg-fs-dark-border py-1 border-[2px] border-fs-dark-border flex gap-3 items-center justify-center active:scale-[.99] transition-transform',  menuCollapsed && 'pl-4 justify-start')}>
                        <Icon icon='insights' />
                        {
                            menuCollapsed &&
                            <p className='font-semibold text-lg group-hover:text-fs-beige'>Insights</p>
                        }
                    </Link>

                </div>

            </nav>
            <div className={cn("min-h-full transition-[width] w-[90px] shrink-0", menuCollapsed && "lg:w-[250px] xl:w-[280px]")}></div>
        </>
    )
}

export default Sidebar
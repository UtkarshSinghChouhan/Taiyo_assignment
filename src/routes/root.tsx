import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import { useState } from 'react'

const Root = () => {
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);

  return (
    <section className="relative flex h-full w-full flex-row items-stretch justify-center bg-fs-beige">
      <Sidebar menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>

      <div className={`flex w-full flex-grow flex-col items-center justify-start bg-red-500`}>

        <Header menuCollapsed={menuCollapsed}  />

        <main className={`flex h-full min-h-[calc(100vh-71px)] w-full flex-grow flex-col items-center justify-start bg-fs-beige-bg-header`}>

          <div className="flex w-full max-w-7xl flex-grow flex-col items-center justify-start p-[11px_11px_40px] sm:px-10 sm:py-8 lg:max-w-8xl lg:px-20">

            <Outlet />

          </div>
        </main>
      </div>
    </section>
  )
}

export default Root
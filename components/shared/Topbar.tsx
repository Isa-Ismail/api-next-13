'use client'

import React from 'react'

interface Props {}

const Topbar = () => {
    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen(!open)
    return (
        <nav className={`sticky z-10 top-0 w-full bg-slate-400 md:h-[4rem] ${open?'h-screen':'h-[4rem]'} flex items-center justify-between p-10`}>
            <div>
                <h1>Topbar</h1>
            </div>
            <div className='hidden md:flex space-x-10 p-10'>
                <p>about</p>
                <p>games</p>
                <p>shop</p>
                <p>gadgets</p>
                <p>luxury</p>
            </div>
            <div className='md:hidden cursor-pointer' onClick={toggle}>
                <h1>Ham</h1>
            </div>
        </nav>
    )
}

export default Topbar
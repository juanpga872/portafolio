import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </div>
    
  )
}

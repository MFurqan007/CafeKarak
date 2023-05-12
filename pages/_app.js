import '@/styles/globals.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CafeKarakLogo from '../public/CafeKarakLogo.png'
import Home from '../public/Home.png'
import Cart from '../public/Cart.png'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  return <>
    <NavigationS/>
    <Component {...pageProps} />
  </>
}

function NavigationS(){
  const router = useRouter();
  const currentRoute = router.pathname;

  return (

    <>
      <nav className='lg:w-[100%] lg:h-auto lg:bg-[#FEE140] flex flex-row justify-between items-center'>
        <Image
          src={CafeKarakLogo}
          alt="Logo"      
          loading="lazy"
        />
        <div className='w-[300px] h-auto flex flex-row justify-between items-center'>
          <Link href='/' className={`${currentRoute === '/'? " w-[140px] h-[65px] flex flex-row justify-between items-center bg-[#feea79] border-2 border-[#FA709A] rounded-full": "w-[140px] h-[65px] flex flex-row justify-between items-center border-2 border-[#FEE140] rounded-full hover:bg-[#e4ca39] hover:border-2 hover:border-[#feea79] hover:rounded-full "}`}>
            <Image
              src={Home}
              alt="Logo"      
              loading="lazy"
              className='w-10 h-10 ml-3'
            />
            <span className='font-ubuntu text-2xl mr-3'>Home</span>
          </Link>
          <div className='font-ubuntu text-2xl font-bold'>|</div>
          <Link href='/cart' className={`${currentRoute === '/cart'? " w-[140px] h-[65px] flex flex-row justify-between items-center bg-[#feea79] border-2 border-[#FA709A] rounded-full": "w-[140px] h-[65px] flex flex-row justify-between items-center border-2 border-[#FEE140] rounded-full hover:bg-[#e4ca39] hover:border-2 hover:border-[#feea79] hover:rounded-full "}`}>
            <Image
              src={Cart}
              alt="Logo"      
              loading="lazy"
              className='w-10 h-10 ml-3'
            />
            <span className='font-ubuntu text-2xl mr-3'>Cart</span>
          </Link>
        </div>
      </nav>

    </>
    // <>
     
    //   {/* <Link href='/course'>Course | </Link>
    //   <Link href='/blog'>Blog | </Link> */}
    // </>
  )
}
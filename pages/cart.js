import React from 'react'
import Image from 'next/image'
import Add from '../public/plus.png'
import Subtract from '../public/minus.png'

export default function cart({items}) {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center'>
      <div className='w-[40%] h-[500px] flex flex-col bg-[#f3edc7] justify-center items-center mt-10 border rounded-2xl'>
        <p className='w-[100%] h-[50px] border flex justify-center items-center font-ubuntu font-semibold text-[40px] text-[#c534bb]'>Cart Items</p>
       
        <div className='w-[100%] h-[400px] flex flex-col items-center'>

          {
            items.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[95%] h-[100px] mt-5 p-5 flex flex-row justify-between items-center border bg-[#F8E356] rounded-2xl'>
                    <p>{data.name}</p>
                    <div className='flex flex-row'>
                      <button className='w-[25px] h-[25px] bg-[#c534bb] border rounded-full flex justify-center items-center hover:border hover:bg-[#e681df]'>
                        <Image
                          src={Subtract}
                          alt="minus"      
                          loading="lazy"
                          width = {20}
                          height={20}
                        />
                      </button>
                      <p>{data.quantity}</p>
                      <button className='w-[25px] h-[25px] bg-[#c534bb] border rounded-full flex justify-center items-center hover:border hover:bg-[#e681df] '>
                        <Image
                          src={Add}
                          alt="minus"      
                          loading="lazy"
                          width = {20}
                          height={20}
                        />
                      </button>
                    </div>
                    <p>{data.price}</p>
                    <p>{data.price * data.quantity}</p>
                  </div>

                ) 
              }
            )
          }
          
        </div>
        <button className='w-[50%] h-[50px] bg-[#FF4F8B] text-white border rounded-full hover:bg-[#E3B1F6] hover:text-[#c534bb]'>
          <span>Complete Checkout</span>
        </button>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  // Here we can use Axios if we want as well
  const items = [
    {
      name: 'item1',
      quantity: 2,
      price: 10.00
    },
    {
      name: 'item2',
      quantity: 1,
      price: 20.00
    },
    {
      name: 'item3',
      quantity: 3,
      price: 5.00
    },
  ]
  
  console.log(items)
  return {
      props: {
        items: items,
      }
  }
}

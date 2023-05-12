import Image from 'next/image'
import { Inter } from 'next/font/google'
import CafeKarakLogo from '../public/CafeKarakLogo.png'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useRouter } from 'next/router'
import A1 from '../public/A1.jpg'
import A2 from '../public/A2.jpg'
import A3 from '../public/A4.jpg'
import A4 from '../public/A3.jpg'
import S1 from '../public/S1.jpg'
import S2 from '../public/S2.jpg'
import So1 from '../public/So1.jpg'
import E1 from '../public/E1.jpg'
import E2 from '../public/E2.jpg'
import E3 from '../public/E3.jpg'
import Sa1 from '../public/Sa1.jpg'
import Sa2 from '../public/Sa2.jpg'
import P1 from '../public/P1.jpg'
import P2 from '../public/P2.jpg'
import P3 from '../public/P3.jpg'
import P4 from '../public/P4.jpg'
import C1 from '../public/C1.jpg'
import C2 from '../public/C2.jpg'
import T1 from '../public/T1.jpg'
import { data } from 'autoprefixer'


// #E3B1F6
// #FF4F8B
// #F8E356
// #C850C0

export default function Home({categories, appetizers, salads, soups, entrees, sandwiches, pizza, desserts, beverages}) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className='w-[100%] h-[100%] flex flex-col justify-center items-center'>
      <div className='w-[80%] h-auto flex flex-row flex-wrap justify-evenly'>
        {
          categories.map(
            (data, index) => {
              return(
                <Link key={index} href={`#${data}`} className={`${currentRoute === `#${data}`? 'w-[150px] h-[50px] border-3 border-[#FF4F8B] rounded-full bg-[#F8E356] mt-5 flex items-center justify-center' : 'w-[150px] h-[50px] border-2 border-[#F0F0F0] rounded-full bg-[#F0F0F0] mt-5 flex items-center justify-center hover:bg-[#F8E356] hover:border-[#F8E356]'}`}>
                  <span className='font-ubuntu text-xl text-[black]'>{data}</span>
                  {/* <Image
                    src={data.src}
                    alt="Logo"      
                    loading="lazy"
                    width = {20}
                    height={20}
                    className='w-10 h-10'
                  /> */}
                </Link>
              ) 
            }
          )
        }
      </div>
      
      <div className='w-[90%] h-auto flex flex-col justify-start items-start'>
        
        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Appetizers' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Appetizers</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             appetizers.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[275px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={260}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>

        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Salads' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Salads</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             salads.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[275px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={260}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>

        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Soups' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Soups</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             soups.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[275px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={260}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>
         
        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Entrees' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Entrees</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             entrees.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[275px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={260}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>

        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Sandwiches' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Sandwiches</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             sandwiches.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[275px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={260}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>
        
        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Pizza' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Pizza</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             pizza.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[275px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={260}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>

        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Desserts' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Desserts</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             desserts.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[240px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={250}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>
        
        <div className='w-[100%] h-auto mt-10 flex flex-col justify-start items-start'>
          <span id='Beverages' className='text-[#FF4F8B] font-sans font-semibold text-6xl'>Beverages</span>
          <div className='w-[100%] h-auto mt-5 flex flex-wrap justify-start items-center'>
            {
             beverages.map(
              (data, index) => {
                return(
                  <div key={index} className='w-[275px] h-[325px] mr-5 flex flex-col justify-center items-center border border-gray-200  hover:border-[3px] hover:border-[#F8E356] rounded-xl'>
                    <div className='w-[100%] h-[240px]'>
                      <Image
                        src={data.src}
                        alt="Logo"      
                        loading="lazy"
                        width = {275}
                        height={220}
                        className='border rounded-xl'
                      />
                    </div>

                    <p className='font-ubuntu text-lg font-semibold'>{data.name}</p>
                    <div className='flex flex-row justify-start items-start'>
                      <p className='font-ubuntu text-md font-normal'>Price: $</p>
                      <p className='font-ubuntu text-md font-normal'>{data.price}</p>
                    </div>
                    <button className='w-[80%] h-auto border rounded-full mt-2 bg-red-600'>
                      <span className='font-ubuntu text-md font-normal text-white'>Add to cart</span>
                    </button>
                  </div>
                )
              }
             ) 
            }
          </div>
        </div>

      </div>
    </div>

  )
}



export async function getStaticProps(){
  // Here we can use Axios if we want as well
  const response = ['Appetizers','Salads','Soups','Entrees','Sandwiches','Pizza','Desserts','Beverages']
  const categories = response
  const appetizers = [
    {
      name: "Bruschetta",
      src: A1,
      price: 8.99
    },
    {
      name: "Mozzarella Sticks",
      src: A4,
      price: 10.99
    },
    {
      name: "Garlic Bread",
      src: A3,
      price: 7.99
    },
    {
      name: "Chicken Wings",
      src: A2,
      price: 12.99
    }
  ]
  
  const salads = [
    {
      name: "Caesar Salad",
      src: S1,
      price: 9.99
    },
    {
      name: "Greek Salad",
      src: S2,
      price: 11.99
    }
  ]

  const soups = [
    {
      name: "Tomato Soup",
      src: So1,
      price: 6.99
    }
  ]

  const entrees = [
    {
      name: "Grilled Salmon",
      src: E1,
      price: 18.99
    },
    {
      name: "Chicken Alfredo",
      src: E2,
      price: 15.99
    },
    {
      name: "Steak Frites",
      src: E3,
      price: 22.99
    }
  ]

  const sandwiches = [
    {
      name: "Classic BLT",
      src: Sa1,
      price: 10.99
    },
    {
      name: "Grilled Cheese",
      src: Sa2,
      price: 8.99
    }
  ]

  const pizza = [
    {
      name: "Margherita Pizza",
      src: P1,
      price: 12.99
    },
    {
      name: "Pepperoni Pizza",
      src: P2,
      price: 14.99
    },
    {
      name: "Hawaiian Pizza",
      src: P3,
      price: 15.99
    },
    {
      name: "Vegetarian Pizza",
      src: P4,
      price: 13.99
    }
  ]

  const desserts = [
    {
      name: "Chocolate Cake",
      src: C1,
      price: 7.99
    },
    {
      name: "Tiramisu",
      src: C2,
      price: 8.99
    }
  ]

  const beverages = [
    {
      name: "Iced Tea",
      src: T1,
      price: 2.99
    }
  ]
  
  console.log(categories)
  return {
      props: {
        // posts: posts.slice(0,20)
        categories: categories,
        appetizers: appetizers,
        salads: salads,
        soups: soups,
        entrees: entrees,
        sandwiches: sandwiches,
        pizza: pizza,
        desserts: desserts,
        beverages: beverages
      }
  }
}

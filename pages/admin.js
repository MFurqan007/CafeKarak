import React from 'react'

export default function admin({orders}) {
  return (

    <div className='w-[100%] h-[100%] flex justify-center items-center'>
        <div className='mt-10 w-[90%] h-auto flex flex-row justify-evenly items-center flex-wrap'>
    
        {
          orders.map(
            (data, index) => {
              return(
                <div key={index} className='mt-5 w-[300px] h-[300px] border-2 hover:border-[#F8E356] bg-gray-100 rounded-2xl flex flex-col justify-evenly items-center'>
                    <div className='w-[100%] h-auto flex flex-row justify-evenly items-center'>
                        <p>{data.date}</p>
                        <p>{data.timeStamp}</p>
                    </div>
                    <p>{data.name}</p>
                    <p>{data.quantity}</p>
                    <p>{data.username}</p>
                    <button className='w-[60%] bg-[#E3B1F6] border rounded-full'>
                        Order Prepared
                    </button>
                </div>
              ) 
            }
          )
        }    
        </div>
    </div>
  )
}

export async function getStaticProps(){
    // Here we can use Axios if we want as well
    const orders = [
        {
          date: '2022-03-15',
          timeStamp: '12:30 PM',
          name: 'Product A',
          quantity: 2,
          username: 'JohnDoe'
        },
        {
          date: '2022-04-02',
          timeStamp: '9:45 AM',
          name: 'Product B',
          quantity: 1,
          username: 'JaneSmith'
        },
        {
          date: '2022-04-05',
          timeStamp: '3:15 PM',
          name: 'Product C',
          quantity: 3,
          username: 'BobJohnson'
        },
        {
          date: '2022-04-12',
          timeStamp: '11:00 AM',
          name: 'Product A',
          quantity: 1,
          username: 'SarahLee'
        },
        {
          date: '2022-04-13',
          timeStamp: '2:20 PM',
          name: 'Product D',
          quantity: 2,
          username: 'JohnDoe'
        },
        {
          date: '2022-04-18',
          timeStamp: '10:15 AM',
          name: 'Product E',
          quantity: 1,
          username: 'BobJohnson'
        },
        {
          date: '2022-04-19',
          timeStamp: '4:30 PM',
          name: 'Product B',
          quantity: 2,
          username: 'SarahLee'
        },
        {
          date: '2022-04-21',
          timeStamp: '9:00 AM',
          name: 'Product F',
          quantity: 3,
          username: 'JaneSmith'
        },
        {
          date: '2022-04-21',
          timeStamp: '11:30 AM',
          name: 'Product C',
          quantity: 1,
          username: 'JohnDoe'
        },
        {
          date: '2022-04-21',
          timeStamp: '2:00 PM',
          name: 'Product D',
          quantity: 1,
          username: 'BobJohnson'
        }
      ]
       
    console.log(orders)
    return {
        props: {
          // posts: posts.slice(0,20)
          orders: orders
        }
    }
  }
  

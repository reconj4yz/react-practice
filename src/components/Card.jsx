import React from 'react'

const Card = () => {
    const data = [
    {image:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Amazon Basics.',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos natus consequatur!',
    inStock:true
    },
    {image:'https://images.unsplash.com/photo-1527784281695-866fa715d9d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Daily Objects',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos natus consequatur!',
    inStock:false
    },
    {image:'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Apple',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos natus consequatur!',
    inStock:false
    }
    ]
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
        {data.map((elem,index)=>(
                    <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
                    <div className='w-full h-32 bg-zinc-300'>
                        <img className='w-full h-full object-cover' src={elem.image} alt="" />
                    </div>
                    <div className='w-full px-3 py-4'>
                        <h2 className='font-semibold'>{elem.name}</h2>
                        <p className='text-xs mt-5'>{elem.description}</p>
                        <button onClick={()=>{alert('Chal rha hai')}} className={`px-4 py-2 ${elem.inStock ?'bg-blue-600' : 'bg-red-600'} rounded-md text-xs mt-2 text-white`}>{elem.inStock ? "In Stock" : "Out Of Stock"}</button>
                    </div>
                    </div>
        ))}
    </div>
  )
}

export default Card
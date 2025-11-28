import React from 'react'

const BookCart = (props) => {
  return (
    <div className='w-50 h-auto border-green-950 bg-green-700 font-serif flex flex-col gap-1 justify-center align-middle text-center p-1.5 shadow-green-900 rounded-full hover:scale-x-95 translate-0.5'>

      {/* Category */}
      <h1 className='text-amber-950 font-extrabold '>{props.category}</h1>

        {/* image */}
      <img className='w-20 h-auto bg-cover rounded-3xl hover:shadow-gray-900' src={props.img} alt="" />

      {/* Book Name */}
      <h3 className='text-gray-950 font-bold'>{props.bookname}</h3>

      {/* Aurthor Name */}
      <h2 className='font-light text-gray-600'>{props.authorName}</h2>

      {/* Book Description */}
      <p className='text-gray-800 font-extralight'>{props.text}</p>


    </div>
  )
}

export default BookCart

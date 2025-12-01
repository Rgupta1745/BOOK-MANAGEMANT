import React from "react";
import { useState } from "react";

const BookCart = (props) => {

  
  return (
    <div className="flex flex-row ">
      <div className="w-[auto] m-10 shadow-lg font-serif flex flex-col justify-center items-center text-center p-4 shadow-green-900 rounded hover:scale-y-110 transition-transform duration-300 ">
        {/* Category */}
        <p className="text-amber-900 text-[28px] font-extrabold mb-2">
          {props.category}
        </p>

        {/* image */}
        <div className="w-[130px] h-[160px] flex justify-center items-center mb-3">
          <img
            src={props.img}
            alt=""
            className="max-h-full max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Book Name */}
        <h3 className="text-amber-950 font-bold text-lg">{props.bookname}</h3>

        {/* Aurthor Name */}
        <p className="font-light text-gray-700 text-sm mt-1">
          {props.authorName}
        </p>

        {/* Book Description */}
        <p className="text-gray-800 font-extralight">{props.text}</p>

        <button
          className="w-32 h-auto bg-amber-950 text-white hover:bg-amber-900"
          onClick={props.onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookCart;

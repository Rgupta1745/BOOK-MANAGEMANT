import React from "react";
import "./Form.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import BookCart from "../components/BookCart";


const Addbooks = () => {

  const [formData, setformData] = useState({
    bookname: "",
    bookImage: "",
    authorname: "",
    bookDescription: "",
    category: "",
  });
  
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  //Form Validation And Error Handler
  const[errors , setErrors]=useState({});
  function formValidation(){
     let newErrors ={};
     let {bookname,bookImage, authorname , bookDescription} =formData;

     const ValidBookName =/^[A-Za-z ]{3,50}$/;
     if(!ValidBookName.test(bookname)){
      newErrors.bookname="Enter Proper Book Name "
     }

     const ValidBookImage =/^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)$/i;
     if(!ValidBookImage.test(bookImage)){
      newErrors.bookImage="Enter the url of the image"
     }

      const ValidAuthorName =/^[A-Za-z .'-]{3,50}$/;
     if(!ValidAuthorName.test(authorname)){
      newErrors.authorname="Enter Author name "
     }

     if(bookDescription.trim().length < 10){
      newErrors.bookDescription="Write minimum 30 words "
     }

     return newErrors;
  }

  //Submit Handler
  function submitHandler(e) {
    e.preventDefault();
    const validateErrors = formValidation();
    setErrors(validateErrors);
    if (validateErrors.length === 0) {
      const exitingUser = JSON.parse(localStorage.getItem("userData")) || [];
      const updatedUser = [...exitingUser, formData];
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      toast.success("Book Added Successfully");

      setformData({
        bookname: "",
        bookImage: "",
        authorname: "",
        bookDescription: "",
        category: "",
      });
    }
  }


  return (
    <div className="box">
      <ToastContainer />
      <form onSubmit={submitHandler} className="addbook-form">

        {/* //BookName */}
        <label>Book Name:</label>
        <input
          type="text"
          value={formData.bookname}
          name="bookname"
          onChange={changeHandler}
          bookname={value}
        />
        {errors.bookname && <span className="errors">{errors.bookname}</span>}


        {/* Book Image  */}
        <label>Book Image:</label>
        <input type="url" name="bookImage" onChange={changeHandler} value={formData.bookImage} img={value} />
        {errors.bookImage && <span className="errors">{errors.bookImage}</span>}

        {/* Author Name */}
        <label>Author Name:</label>
        <input
          type="text"
          value={formData.bookImage}
          name="bookImage"
          onChange={changeHandler}
          authorName ={value}
        />
        {errors.authorname && <span className="errors">{errors.authorname}</span>}

        {/* Book Description */}
        <label>Book Description:</label>
        <textarea
          value={formData.bookDescription}
          name="bookDescription"
          onChange={changeHandler}
          text={value}
        ></textarea>
        {errors.bookDescription && <span className="errors">{errors.bookDescription}</span>}

        {/* Categeory */}
        <label>Category:</label>
         <select 
          value={formData.category}
          type="radio"
          name="category"
          onChange={changeHandler}
          category={value}
         >
          <option value="Select Category ">--Select Category--</option>
          <option value="Fictional">Fictional</option>
          <option value="Non-Fictional">Non-Fictional</option>
          <option value="Academic">Academic</option>
          <option value="Comics">Comics</option>
          <option value="Religious">Religious</option>
          <option value="Children">Children</option>
         </select>

        {/*Button to add books  */}
        <button>Add Books</button>
      </form>
    </div>
  );
};

export default Addbooks;

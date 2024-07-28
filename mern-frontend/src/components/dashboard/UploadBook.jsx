import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Documentary",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Autobiography",
    "Memoir",
    "Business",
    "Dark",
    "Romance",
    "Children",
    "Religion"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //book upload
  const handleBookSubmit =(event)=>{
    event.preventDefault();
    const form =event.target;

    const bookTitle =form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type":"application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data =>{
      alert("Book Uploaded Successfully!!")
      form.reset();
    })
    
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Your Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="book name " required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author name " required />
          </div>
        </div>

        {/*second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="path of image " required />
          </div>
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
            onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
              }
            </Select>

          </div>
        </div>
        {/*book description */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="description..." className='w-full' required rows={4} />
      </div>

      {/*book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="BookPDF-URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required shadow />
      </div>

      <Button type="submit" className='mt-5'>Upload</Button>


      </form>
    </div>
  )
}

export default UploadBook
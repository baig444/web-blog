/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';

function Write() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image)
    formData.append('upload_preset', 'mern-portfolio')
    formData.append('api_key', '911985623315119')

    fetch('https://api.cloudinary.com/v1_1/dexqvfmxn/image/upload', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {
        axios.post('http://localhost:5000/api/addpost', {
          title,
          category,
          description,
          image: data.url
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      })
    setTitle('');
    setCategory('');
    setDescription('');
    setImage(null);

  }

  return (
    <div className='p-3 rounded-md mt-8 w-fit mx-auto'>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <input
          type="text"
          id="category"
          placeholder='Enter Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='bg-transparent px-3 py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl gradient-text'
        />
        <input
          type="text"
          id="title"
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='bg-transparent px-3 py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl gradient-text'
        />
        <input
          type="file"
          accept='image/*' // Accept all image types
          required
          onChange={handleImageChange}
          className='bg-transparent px-3 py-2 border rounded-lg w-full lg:w-[40vw] text-xl'
        />

        <textarea
          id="description"
          value={description}
          placeholder='Enter Description'
          onChange={(e) => setDescription(e.target.value)}
          className='bg-transparent px-3 py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl gradient-text'
        />
        <div className='flex justify-center'>
          <button type="submit" className='bg-blue-700 text-white p-2 px-3 w-fit rounded-full'>Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default Write;

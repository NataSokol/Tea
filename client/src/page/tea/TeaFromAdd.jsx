import React, { useState } from 'react';
import { axiosRequest } from '../../../services/axiosInstance';

function TeaFromAdd({ setTeas }) {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [comm, setComm] = useState('');

  const onHandleSubmit = async (e) => {
    console.log(img);
    try {
      e.preventDefault();
      const data = new FormData();

      data.append('title', title);
      data.append('place', place);
      data.append('image', img);
      data.append('description', description);

      const response = await axiosRequest.post('/teas', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 201) {
        setTeas((prev) => [...prev, response.data.newTea]);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          placeholder='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder='place'
          type='text'
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input type='file' onChange={(e) => setImg(e.target.files[0])} />
        <input
          placeholder='description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>add</button>
      </form>
    </div>
  );
}

export default TeaFromAdd;

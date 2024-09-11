import React, { useState } from 'react';
import { axiosRequest } from '../../../services/axiosInstance';

function TeaFromAdd({ setTeas }) {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [comm, setComm] = useState('');

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosRequest.post('/teas', {
        title,
        place,
        img,
        description,
        comm,
      });
      if (response.status === 201) {
        setTeas((prev) => [...prev, response.data.newTea]);
        setTitle('');
        setPlace('');
        setImg('');
        setDescription('');
        setComm('');
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
        <input
          placeholder='img'
          type='text'
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
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

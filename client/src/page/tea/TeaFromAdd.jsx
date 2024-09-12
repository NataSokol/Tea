import { useState } from 'react';
import { axiosRequest } from '../../../services/axiosInstance';
import './css/TeaAdd.css';

function TeaFromAdd({ setTeas, setActive }) {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState('');
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();

      data.append('title', title);
      data.append('place', place);
      if (img) data.append('image', img); // важная проверка
      data.append('description', description);
      data.append('coordX', coordX);
      data.append('coordY', coordY);
      data.append('TeaLikes', []);

      const response = await axiosRequest.post('/teas', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 201) {
        setTeas((prev) => [...prev, response.data.newTea]);
        setActive(false);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form className='form__add' onSubmit={onHandleSubmit}>
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
          placeholder='description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder='coordinateX'
          type='text'
          value={coordX}
          onChange={(e) => setCoordX(e.target.value)}
        />
        <input
          placeholder='coordinateY'
          type='text'
          value={coordY}
          onChange={(e) => setCoordY(e.target.value)}
        />
        <div className='file_input'>
          <label htmlFor='file_upload' className='file_upload'>
            {'Выберите фото'}
          </label>
          <input
            id='file_upload'
            type='file'
            onChange={(e) => setImg(e.target.files[0])}
            style={{ display: 'none' }}
          />
        </div>
        <button className='button_add' type='submit'>
          Создать
        </button>
      </form>
    </div>
  );
}

export default TeaFromAdd;

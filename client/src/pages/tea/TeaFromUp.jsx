import { useEffect, useState } from 'react';
import { axiosRequest } from '../../services/axiosInstance';

function TeaUp({ tea, teas, setTeas, setActive }) {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState('');
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  useEffect(() => {
    if (tea) {
      setTitle(tea.title || '');
      setPlace(tea.place || '');
      setDescription(tea.description || '');
      setCoordX(tea.coordX || 0);
      setCoordY(tea.coordY || 0);
    }
  }, [tea]);

  const onHandleUpdate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', title || '');
    data.append('place', place || '');
    if (img) {
      data.append('image', img); // Проверяем наличие изображения
    }
    data.append('description', description || '');
    data.append('coordX', coordX || '');
    data.append('coordY', coordY || '');

    try {
      const response = await axiosRequest.put(`/teas/${tea.id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setTeas((prev) =>
          prev.map((t) =>
            t.id === response.data.tea.id ? response.data.tea : t
          )
        );
        setActive(false);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <form className='form__add' onSubmit={onHandleUpdate}>
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
        Обновить
      </button>
    </form>
  );
}

export default TeaUp;

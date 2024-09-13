import { AppContext } from '../../app/AppContext';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosRequest } from '../../services/axiosInstance';
import { useContext, useState } from 'react';
import ModalWindow from '../../shared/ui/ModalWindow';
import TeaUp from './TeaFromUp';
import '../css/TeaItems.css'

const TeaItems = ({ teas, setTeas }) => {
  const { user, setUser } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [comm, setComm] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const tea = teas.find((t) => t.id === parseInt(id));

  const isActive = () => {
    setActive((prev) => !prev);
  };

  if (!tea) {
    return <div>Loading...</div>;
  }

  const onHandleDelete = async () => {
    try {
      const response = await axiosRequest.delete(`/teas/${tea.id}`);
      if (response.status === 200) {
        setTeas(
          (prevTeas) => prevTeas.filter((t) => t.id !== tea.id),
          navigate('/teas')
        );
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  const onHandleDeleteComm = async (commId) => {
    const response = await axiosRequest.delete(
      `/comments/${user.id}/${commId}`
    );
    if (response.status === 200) {
      setTeas((prev) => {
        return prev.map((t) => {
          if (t.id === tea.id) {
            const updatedTeaComms = t.TeaComms.filter(
              (comm) => comm.id !== commId
            );
            return {
              ...t,
              TeaComms: updatedTeaComms,
            };
          }
          return t;
        });
      });
    }
  };

  const onHandleSubmitComm = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosRequest.post('/comments', {
        userId: user.id,
        teaId: tea.id,
        comm,
      });
      if (response.status === 201) {
        setTeas((prev) =>
          prev.map((el) =>
            el.id === tea.id
              ? {
                  ...el,
                  TeaComms: [...(el.TeaComms || []), response.data.newComm], // проверка
                }
              : el
          )
        );
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <div className='tea-item-container'>
      <h3>{tea.title}</h3>
      <p>{tea.place}</p>
      <img src={tea.img} alt={tea.title} />
      <p>{tea.description}</p>
      <div className='comments'>
        <h4>Комментариий</h4>
        {tea.TeaComms &&
          tea.TeaComms.map((el) => (
            <div className='comment' key={el.id}>
              <p>{el.comm}</p>
              {tea.TeaComms.length > 0 && user?.id === el.userId && (
                <button onClick={() => onHandleDeleteComm(el.id)}>
                  Удалить
                </button>
              )}
            </div>
          ))}
        <form onSubmit={onHandleSubmitComm}>
          <input
            type='text'
            placeholder='Your comment...'
            value={comm}
            onChange={(e) => setComm(e.target.value)}
          />
          <button type='submit'>Добавить комментариий</button>
        </form>
      </div>
      <div className='admin-buttons'>
        {user?.isAdmin && <button onClick={isActive}>Обновить</button>}
        {user?.isAdmin && <button onClick={onHandleDelete}>Удалить</button>}
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <TeaUp tea={tea} setTeas={setTeas} setActive={setActive} />
      </ModalWindow>
    </div>
  );
};

export default TeaItems;

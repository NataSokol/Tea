import { useParams, useNavigate } from 'react-router-dom';
import { axiosRequest } from '../../../services/axiosInstance';
import { useState } from 'react';
import ModalWindow from '../../shared/ui/ModalWindow';
import TeaUp from './TeaFromUp';

const TeaItems = ({ teas, setTeas }) => {
  const [active, setActive] = useState(false);
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

  return (
    <div>
      <h3>{tea.title}</h3>
      <p>{tea.place}</p>
      <img src={tea.img} alt={tea.title} />
      <p>{tea.description}</p>
      <p>{tea.comm}</p>
      <>
        <button onClick={isActive}>Update</button>
        <button onClick={onHandleDelete}>Delete</button>
        <ModalWindow active={active} setActive={setActive}>
          <TeaUp tea={tea} setTeas={setTeas} />
        </ModalWindow>
      </>
    </div>
  );
};

export default TeaItems;

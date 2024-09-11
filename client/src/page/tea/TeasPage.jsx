
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalWindow from '../../shared/ui/ModalWindow';
import TeaFromAdd from './TeaFromAdd';
import OneTeaPage from "./OneTeaPage";

const TeasPage = ({ teas, setTeas }) => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    setActive((prev) => !prev);
  };


  return (
    <>
      <h1>TeasPage</h1>

      <div>

        <button onClick={isActive}>Create</button>
        <ModalWindow active={active} setActive={setActive}>
          <TeaFromAdd setTeas={setTeas} teas={teas} />
        </ModalWindow>
      </div>
      {teas.map((tea) => (
        <div key={tea.id}>
          <h2>
            <Link to={`/teas/${tea.id}`}>{tea.title}</Link>
          </h2>
          <p>{tea.description}</p>
        </div>
      ))}
    </div>

  );
};

export default TeasPage;

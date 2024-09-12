
import { Link } from "react-router-dom";
import OneTeaPage from "./OneTeaPage";
import { useContext } from "react";
import { AppContext } from "../../app/AppContext";




import { useState } from 'react';
import ModalWindow from '../../shared/ui/ModalWindow';
import TeaFromAdd from './TeaFromAdd';

const TeasPage = ({ teas, setTeas }) => {
  const [active, setActive] = useState(false);
  
  const TeasPage = ({ teas, setTeas }) => {
  const { user } = useContext(AppContext);

  const isActive = () => {
    setActive((prev) => !prev);
  };


  return (
    <div>
      <h1>TeasPage</h1>
      <div>

        {teas.map((tea) => {
          let flag = false;
          tea.TeaLikes.map((t) => {
            if (t.userId === user?.id) {
              flag = true;
            }
          });
          return (
            <OneTeaPage
              tea={tea}
              key={tea.id}
              setTeas={setTeas}
              user={user}
              flag={flag}
              teas={teas}
            />
          );
        })}

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

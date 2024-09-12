

import { useContext, useState } from 'react';


import { Link } from "react-router-dom";
import OneTeaPage from "./OneTeaPage";

import { AppContext } from "../../app/AppContext";


import ModalWindow from '../../shared/ui/ModalWindow';
import TeaFromAdd from './TeaFromAdd';
import { AppContext } from '../../app/AppContext';

const TeasPage = ({ teas, setTeas }) => {
 
  const [active, setActive] = useState(false);

  const { user, setUser } = useContext(AppContext);

  
 



  const isActive = () => {
    setActive((prev) => !prev);
  };


  return (
    <div>
      <h1>TeasPage</h1>

      <div>
        {user?.isAdmin && <button onClick={isActive}>Create</button>}

             <ModalWindow active={active} setActive={setActive}>
          <TeaFromAdd setTeas={setTeas} teas={teas} />
        </ModalWindow>
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

      

      </div>
     
    </div>
  );
};

export default TeasPage;

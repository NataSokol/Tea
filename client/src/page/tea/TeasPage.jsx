import { useContext, useState } from 'react';
import { AppContext } from '../../app/AppContext';
import OneTeaPage from './OneTeaPage';
import ModalWindow from '../../shared/ui/ModalWindow';
import TeaFromAdd from './TeaFromAdd';

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
          <TeaFromAdd setTeas={setTeas} setActive={setActive} />
        </ModalWindow>
      </div>
      <div>
        {teas &&
          teas.map((tea) => {
            const isLiked =
              tea.TeaLikes?.some((t) => t.userId === user?.id) || false;
            return (
              <OneTeaPage
                tea={tea}
                key={tea.id}
                setTeas={setTeas}
                user={user}
                flag={isLiked}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TeasPage;

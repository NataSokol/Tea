import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
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

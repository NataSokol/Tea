import { Link } from "react-router-dom";
import OneTeaPage from "./OneTeaPage";

const TeasPage = ({ user, teas, setTeas }) => {
  return (
    <>
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
              setMusic={setTeas}
              user={user}
              flag={flag}
              
            />
          );
        })}
      </div>
    </>
  );
};

export default TeasPage;

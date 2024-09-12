import { Link } from "react-router-dom";
import OneTeaPage from "./OneTeaPage";
import { useContext } from "react";
import { AppContext } from "../../app/AppContext";

const TeasPage = ({ teas, setTeas }) => {
  const { user } = useContext(AppContext);
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
              setTeas={setTeas}
              user={user}
              flag={flag}
              teas={teas}
            />
          );
        })}
      </div>
    </>
  );
};

export default TeasPage;

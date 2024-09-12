import { useState } from "react";
import { useParams } from "react-router-dom";

const TeaItems = ({ teas }) => {
  const { id } = useParams();
  // const [comments, setComments] = useState([]);
  const tea = teas.find((t) => t.id === parseInt(id));

  return (
    <div>
      <h3>{tea.title}</h3>
      <p>{tea.place}</p>
      <img src={tea.img} alt={tea.title} />
      <p>{tea.description}</p>
      <div>
        {tea.TeaComms &&
          tea.TeaComms.map((el) => <span key={el.id}>{el.comm}</span>)}
        {tea.TeaComms.length > 0 && <button>Delete</button>}
      </div>
    </div>
  );
};

export default TeaItems;

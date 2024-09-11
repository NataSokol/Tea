import { useParams } from 'react-router-dom';

const TeaItems = ({ teas }) => {
  const { id } = useParams();
  const tea = teas.find((t) => t.id === parseInt(id));

  return (
    <div>
      <h3>{tea.title}</h3>
      <p>{tea.place}</p>
      <img src={tea.img} alt={tea.title} />
      <p>{tea.description}</p>
      <p>{tea.comm}</p>
    </div>
  );
};

export default TeaItems;

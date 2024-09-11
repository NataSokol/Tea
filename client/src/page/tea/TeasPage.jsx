import { Link } from 'react-router-dom';

const TeasPage = ({ teas }) => {
  return (
    <div>
      <h1>TeasPage</h1>
      <div>
        {teas.map((tea) => (
          <div key={tea.id}>
            <h2>
              <Link to={`/teas/${tea.id}`}>{tea.title}</Link>
            </h2>
            <p>{tea.description}</p>
            <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeasPage;

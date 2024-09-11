import React from "react";
import { Link } from "react-router-dom";

function OneTeaPage({ tea, setMusic, user, flag }) {
  return (
    <>
      <img src={tea.img} alt="kartinka" />
      <h2>
        <Link to={`/teas/${tea.id}`}>{tea.title}</Link>
      </h2>
      <p>{tea.description}</p>
      <div >{tea.TeaLikes.length}</div>

      {flag ? <button>❤️</button> : <button>🤍</button>}
    </>
  );
}

export default OneTeaPage;

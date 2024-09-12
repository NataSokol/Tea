import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosRequest } from "../../services/axiosInstance";
import { AppContext } from "../../app/AppContext";

function OneTeaPage({ teas, setTeas, tea, flag }) {
  const { user } = useContext(AppContext);

  const [liked, setLiked] = useState(flag);

  useEffect(() => {}, []);

  const likeTea = async () => {
    const { data } = await axiosRequest.post(`/like`, {
      userId: user.id,
      teaId: tea.id,
    });

    if (data.message === "success") {
      setTeas((prev) =>
        prev.map((el) =>
          el.id === tea.id
            ? {
                ...el,
                TeaLikes: [...el.TeaLikes, data.newLike],
              }
            : el
        )
      );
      setLiked((prev) => !prev);
    }
  };

  const UnLike = async () => {
    await axiosRequest.delete(`/like/${user.id}/${tea.id}`);
    setTeas((prev) =>
      prev.map((el) =>
        el.id === tea.id
          ? {
              ...el,
              TeaLikes: el.TeaLikes.filter((arr) => arr.userId !== user.id),
            }
          : el
      )
    );
    setLiked((prev) => !prev);
  };

  return (
    <>
      <img src={tea.img} alt="kartinka" />
      <h2>
        <Link to={`/teas/${tea.id}`}>{tea.title}</Link>
      </h2>
      <p>{tea.description}</p>
      <div>{tea.TeaLikes.length}</div>

      {liked ? (
        <button onClick={UnLike}>❤️</button>
      ) : (
        <button onClick={likeTea}>🤍</button>
      )}
    </>
  );
}

export default OneTeaPage;

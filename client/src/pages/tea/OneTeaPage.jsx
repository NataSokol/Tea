import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosRequest } from '../../services/axiosInstance';
import { AppContext } from '../../app/AppContext';

function OneTeaPage({ teas, setTeas, tea, flag }) {
  const { user } = useContext(AppContext);

  const [liked, setLiked] = useState(flag);

  useEffect(() => {}, []);

  const likeTea = async () => {
    const { data } = await axiosRequest.post(`/like`, {
      userId: user.id,
      teaId: tea.id,
    });

    if (data.message === 'success') {
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
    <div className='tea-card'>
      <div className='tea-card-header'>
        <h2>
          <Link to={`/teas/${tea.id}`} className='tea-card-title'>
            {tea.title}
          </Link>
        </h2>
      </div>
      <div className='tea-card-image'>
        <img src={tea.img} alt='kartinka' />
      </div>
      <div className='tea-card-content'>
        <p>{tea.description}</p>
      </div>
      <div className='tea-card-footer'>
        <div className='tea-likes-count'>{tea.TeaLikes.length}</div>
        {liked ? (
          <button className='like-button' onClick={UnLike}>
            ❤️
          </button>
        ) : (
          <button className='like-button' onClick={likeTea}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
}

export default OneTeaPage;

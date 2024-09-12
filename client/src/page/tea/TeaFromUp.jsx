import React, { useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";

function TeaUp({ tea, teas, setTeas }) {
  const [title, setTitle] = useState(tea.title);
  const [place, setPlace] = useState(tea.place);
  const [img, setImg] = useState(tea.img);
  const [description, setDescription] = useState(tea.description);
  const [comm, setComm] = useState(tea.comm);

  const onHandleUpdate = async (e) => {
    try {
      e.preventDefault();

      const response = await axiosRequest.put(`/teas/${tea.id}`, {
        title,
        place,
        img,
        description,
        comm,
      });
      if (response.status === 200) {
        setTeas((prev) =>
          prev.map((t) =>
            t.id === response.data.tea.id ? response.data.tea : t
          )
        );
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <form onSubmit={onHandleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default TeaUp;

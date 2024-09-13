import React, { useContext, useEffect, useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
import OneTeaPage from "./OneTeaPage";
import { AppContext } from "../../app/AppContext";
import '../css/FavoritsPage.css'

function FavoritsPage({teas, setTeas}) {
  const { user } = useContext(AppContext);
  console.log(teas);
  
  

  return (
    <>
      <h1 className="favorite__title">Любимчики</h1>
      <div className="teas-page-card-container">
        {teas &&
          teas.map((tea) => {
            const isLiked =
              tea.TeaLikes?.some((t) => t.userId === user?.id || false)
              if(isLiked) {
            return (
              
              <OneTeaPage
              tea={tea}
              key={tea.id}
              setTeas={setTeas}
              user={user}
              flag={isLiked}
              className='tea-card'
            />
              )
              }
               return null
          })}
      </div>
    </>
  );
}

export default FavoritsPage;

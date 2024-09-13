import React, { useContext, useEffect, useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
import OneTeaPage from "./OneTeaPage";
import { AppContext } from "../../app/AppContext";

import { Link } from "react-router-dom";

function FavoritsPage({teas, setTeas}) { 



import '../css/FavoritsPage.css'


  const { user } = useContext(AppContext);
  console.log(teas);
  
  

  return (

    <div>
    {user ? ( 

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
      </div>) 
      : (  <div>
        <div>Лайков нет( </div>
        <div>{`Давай `}
        <Link to={`/authorization`} >
         зарегистриуемся?
          </Link>
          </div>


      </div>
      
      

      )}
 </div>
)
        
  
}

export default FavoritsPage;

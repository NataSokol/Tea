import React from "react";
import "../css/MainPage.css";
function MainPage() {
  // Генерируем 10 элементов с текстом "АУФ" в случайных позициях
  const aufElements = [...Array(20)].map((_, index) => {
    // Функция для генерации случайных позиций, избегая центра
    const randomPosition = () => {
      let x, y;
      const min = 0.05; // 5%
      const max = 0.95; // 95%
      do {
        x = Math.random() * (max - min) + min; // x от 5% до 95%
        y = Math.random() * (max - min) + min; // y от 5% до 95%
      } while (
        x > 0.3 && x < 0.7 && // избегаем центральную область
        y > 0.3 && y < 0.7
      );
      return { x, y };
    };
    
    const { x, y } = randomPosition();
    const style = {
      position: "absolute",
      top: `${y * 100}%`,
      left: `${x * 100}%`,
      transform: "translate(-50%, -50%)",
    };
    return (
      <div key={index} className="auf" style={style}>
        АУФ
      </div>
    );
  });

  return (
    <>
      <div className="main">
        <h1 className="main__title">
          Продавцы чая приветствую вас в своём магазине!
        </h1>
        {aufElements}
      </div>
    </>
  );
}

export default MainPage;

import React from 'react';
import style from 'pages/artwork/artwork.module.css';

function Frame() {
  return (
    <div className={`${style.bgWall} flex flex-col`}>
      <div className={style.blur}>
        <div className={style.frameClassic}>
          <img className={style.imgClassic} src="/elefants.jpg" />
        </div>
      </div>

      <div className="bg-amber-100">
        <div>Elefants, 2020 </div>
        <div>oil on canvas </div>
        <div>50x70 cm</div>
      </div>
    </div>
  );
}

export default Frame;

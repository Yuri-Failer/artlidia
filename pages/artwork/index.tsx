import React from 'react';
import style from 'pages/artwork/artwork.module.css';

const Frame = () => {
  return (
    <div className="flex flex-col">
       <div className={style.frameClassic}>
        <img className={style.imgClassic} src={'/elefants.jpg'} />
      </div>

      <div className='bg-amber-100'>
        <div>Elefants, 2020 </div>
        <div>oil on canvas </div>
        <div>50x70 cm</div>
      </div>
    </div>
  );
};

export default Frame;

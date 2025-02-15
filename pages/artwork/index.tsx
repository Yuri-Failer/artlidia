import React from 'react';
import style from './artwork.module.css';

function Frame({title}: {title: string}) {
  return (
    <div className={`${style.bgWall} flex flex-col`}>
      <div className={style.blur}>
        <div className="flex flex-col items-center p-10 sm:p-6">
          <div className={style.frameClassic}>
            <img className={style.imgClassic} src="/elefants.jpg" />
          </div>
          <div className="bg-amber-100 flex flex-col items-center justify-center mt-auto w-[40%] p-2">
            <div>{title}, 2020</div>
            <div>oil on canvas</div>
            <div>50x70 cm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame;

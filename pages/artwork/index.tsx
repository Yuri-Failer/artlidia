import React from 'react';
import style from 'pages/artwork/artwork.module.css';

const Frame = () => {
  return (
    <div>
      {/*<div className='border-8 border-amber-600 w-4/6 m-auto bg-amber-50'>*/}
      {/*<div className="bg-yellow-300 border border-solid border-5vmin border-eee border-t-ddd border-r-eee border-b-fff border-l-eee rounded-2 box-shadow-inner-md box-shadow-md m-10vh 10vw h-80vh p-8 relative text-center">*/}
       <div className={style.frameClassic}>
        <img className={style.imgClassic} src={'/elefants.jpg'} />
      </div>

      {/*<div className='bg-amber-100'>*/}
      {/*  <div>Elefants, 2020 </div>*/}
      {/*  <div>oil on canvas </div>*/}
      {/*  <div>50x70 cm</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Frame;

import { memo } from 'react';

import cls from './MOdal.module.scss';

interface props {
   w: string;
   h: string;
   add: string;
   bottom: string;
   top: string;
}

const MOdal = memo(({ w, h, add, bottom, top }: props) => {
   console.log(w, h, add, bottom, top);
   return <div className={cls.MOdal}> MODAL IS MY! </div>;
});

MOdal.displayName = 'MOdal';
export default MOdal;

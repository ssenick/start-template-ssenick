import './styles/index.scss';

import { Suspense } from 'react';

import { AppRouter } from '@/app/povaiders/Router';
import { Header } from '@/components/Header';
import { classNames } from '@/helpers/classNames/classNames';

function App() {
   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback={''}>
            <Header className={'app__header'} />
            <AppRouter className={'app__main'} />
         </Suspense>
      </div>
   );
}

export default App;

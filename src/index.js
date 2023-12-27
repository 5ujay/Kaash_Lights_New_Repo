import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import Whatwedo from './pages/Whatwedo';
import OurProjects from './pages/Ourprojects';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Whoarewe from './pages/Whoarewe';
import Whatwebelieve from './pages/Whatwebelieve';
import Lightschool from './pages/Lightschool';
import Articles from './pages/Articles';
import Carbonemission from './pages/Carbonemission';
import LightFinder from './pages/LightFinder';
import LightFinder2 from './pages/LightFinder2';
import LightFinder3 from './pages/LightFinder3';
import LightFinder4 from './pages/LightFinder4';
import LightFinder5 from './pages/LightFinder5';
import LightFinder6 from './pages/LightFinder6';
import LightFinder7 from './pages/LightFinder7';
import LightFinder8 from './pages/LightFinder8';
import LightFinder9 from './pages/LightFinder9';
import Pollinators from './pages/Articles/Pollinators';
import Immersive from './pages/Articles/Immersive';
import Festivals from './pages/Articles/Festivals';
import LightAI from './pages/Articles/LightAI';
import Victoria from './pages/Articles/Victorian';
import Ecosystem from './pages/Articles/Ecosystem';
import Tourism from './pages/Articles/Tourism';
import Human from './pages/Articles/Human';
import Lighting from './pages/Articles/Lighting';
import Dancing from './pages/Articles/Dancing';
import Contactpop from './Components/Contactpop';

import Energyconsump from './pages/Energyconsump';
import CCMoreinfo from './pages/CCMoreinfo';
import CCVerif from './pages/CCVerif';
import CCVeriff from './pages/CCVeriff';
import CCGetres from './pages/CCGetres';
import CCMoreinfoLamp from './pages/CCMoreinfoLamp';
import CCMoreinfoEnergy from './pages/CCMoreinfoEnergy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'whatWeDo',
    element: <Whatwedo />,
  },
  {
    path: 'ourprojects',
    element: <OurProjects />,
  },
  {
    path: 'whoarewe',
    element: <Whoarewe />,
  },
  {
    path: 'whatwebelieve',
    element: <Whatwebelieve />,
  },
  {
    path: 'lightschool',
    element: <Lightschool />,
  },
  {
    path: 'articles',
    element: <Articles />,
  },
  {
    path: 'carbonemission',
    element: <Carbonemission />,
  },
  {
    path: 'lightfinder',
    element: <LightFinder />,
  },
  {
    path: '/lightfinder2',
    element: <LightFinder2 />,
  },
  {
    path: '/lightfinder3',
    element: <LightFinder3 />,
  },
  {
    path: '/lightfinder4',
    element: <LightFinder4 />,
  },
  {
    path: '/lightfinder5',
    element: <LightFinder5 />,
  },
  {
    path: '/lightfinder6',
    element: <LightFinder6 />,
  },
  {
    path: '/lightfinder7',
    element: <LightFinder7 />,
  },
  {
    path: '/lightfinder8',
    element: <LightFinder8 />,
  },
  {
    path: '/lightfinder9',
    element: <LightFinder9 />,
  },
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/pollinators',
    element: <Pollinators />,
  },
  {
    path: '/immersive',
    element: <Immersive />,
  },
  {
    path: '/festivals',
    element: <Festivals />,
  },
  {
    path: '/lightai',
    element: <LightAI />,
  },
  {
    path: '/victorian',
    element: <Victoria />,
  },
  {
    path: '/ecosystem',
    element: <Ecosystem />,
  },
  {
    path: '/tourism',
    element: <Tourism />,
  },
  {
    path: '/human',
    element: <Human />,
  },
  {
    path: '/lighting',
    element: <Lighting />,
  },
  {
    path: '/dancing',
    element: <Dancing />,
  },
  // {
  //   path: "/contact",
  //   element: <Contactpage />
  // },
  {
    path: 'energyconsump',
    element: <Energyconsump />,
  },
  {
    path: 'ccmoreinfo',
    element: <CCMoreinfo />,
  },
  {
    path: 'ccverif',
    element: <CCVerif />,
  },
  {
    path: 'ccveriff',
    element: <CCVeriff />,
  },
  {
    path: '/CCGetres',
    element: <CCGetres />,
  },
  {
    path: '/CCMoreinfoLamp',
    element: <CCMoreinfoLamp />,
  },
  {
    path: '/CCMoreinfoEnergy',
    element: <CCMoreinfoEnergy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

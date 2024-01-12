import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

import FavoritePage from './containers/FavoritePage';

import PublicLayout from './layouts/PublicLayout';



const router = createBrowserRouter([
  {
    
    element: <PublicLayout />,
    children: [
      { path: "/",
       element: <HomeContainer /> },
      { path: "/favorite",
       element: <FavoritePage /> },
      
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    

    </div>
    
  );
}

export default App
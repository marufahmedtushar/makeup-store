
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './components/About/About';
import Store from './components/Store/Store';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
    {
      path:'/',
      element:<Store></Store>
    },{
      path:'orders',
      loader: ()=> fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'),
      element:<Orders></Orders>
    },
    {
      path:'about',
      element:<About></About>
    }
    ]
  }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;

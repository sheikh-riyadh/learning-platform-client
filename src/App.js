import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routers';

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;

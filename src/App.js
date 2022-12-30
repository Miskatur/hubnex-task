import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Router/Router';
import "swiper/css/bundle";
function App() {
  return (
    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;

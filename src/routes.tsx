import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from './Components/PaginaPadrao/index';
import Usuarios from './Components/pages/Usuarios'; // Adjust the path if necessary
import Perfil from './Components/pages/Perfil';
import PostsPage from './Components/pages/PostsPage';
import FeedsPage from './Components/pages/FeedsPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>} />
        <Route path='/perfil' element={<PaginaPadrao/>}>
          <Route index element={<Perfil/>} />
        </Route>
        <Route path='/perfil/posts' element={<PaginaPadrao/>}>
          <Route index element={<PostsPage/>} />
        </Route>
         <Route path='/perfil/feeds' element={<PaginaPadrao/>}>
          <Route index element={<FeedsPage/>} />
        </Route>
        <Route path='/usuarios' element={<PaginaPadrao/>}>
          <Route index element={<Usuarios/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import TvShow from './pages/TvShow/TvShow';
import Movies from './pages/Movies/Movies';
import MyList from './pages/MyList/MyList';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TvShow />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

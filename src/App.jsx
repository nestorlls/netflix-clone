import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Loading = lazy(() => import('./components/Loading/Loading'));
const Login = lazy(() => import('./pages/Login/Login'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Home = lazy(() => import('./pages/Home/Home'));
const TvShow = lazy(() => import('./pages/TvShow/TvShow'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MyList = lazy(() => import('./pages/MyList/MyList'));
const Player = lazy(() => import('./pages/Player/Player'));
const NotFound404 = lazy(() => import('./pages/NotFound404/NotFound404'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/player" element={<Player />} />
            <Route path="/tv" element={<TvShow />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;

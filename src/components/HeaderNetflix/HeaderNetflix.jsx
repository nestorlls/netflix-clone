import HeaderNetflixWrapper from './ui-HeaderNetflix';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import useScroll from '../../hooks/useScroll';
import { logout } from '../../services/auth-service';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../services/movie-services';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'TV Show', path: '/tv' },
  { name: 'Movies', path: '/movies' },
  { name: 'My List', path: '/mylist' },
];

const HeaderNetflix = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [query, setQuery] = useState('');

  const { pathname } = useLocation();

  const { isScrolled } = useScroll();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const type =
      (pathname === '/' && 'collection') ||
      (pathname === '/tv' && 'tv') ||
      'movie';

    dispatch(searchMovies({ type, query }));
    setQuery('');
  };

  const handleShowSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleInputHover = () => {
    setInputHover(!inputHover);
  };

  return (
    <HeaderNetflixWrapper>
      <div className={`${isScrolled && 'scrolled'}`}>
        <nav className={`navbar flex j-between a-center`}>
          <div className="left flex a-center j-center">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo netflix" />
              </Link>
            </div>
            <ul className="links flex a-center">
              {navigation.map(({ name, path }) => (
                <li key={name} className="link">
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="right flex a-center">
            {pathname !== '/mylist' && (
              <div
                className={`search flex a-center ${
                  showSearchInput && 'show-search'
                }`}>
                <button className="btn-search" onClick={handleShowSearchInput}>
                  <FaSearch />
                </button>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="input-search"
                    value={query}
                    onMouseEnter={handleInputHover}
                    onMouseLeave={handleInputHover}
                    onChange={handleChange}
                    onBlur={() => {
                      setInputHover(false);
                      setShowSearchInput(false);
                    }}
                  />
                </form>
              </div>
            )}
            <button className="btn-logout">
              <FaPowerOff onClick={logout} />
            </button>
          </div>
        </nav>
      </div>
    </HeaderNetflixWrapper>
  );
};

export default HeaderNetflix;

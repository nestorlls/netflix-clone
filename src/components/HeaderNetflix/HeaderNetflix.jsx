import HeaderNetflixWrapper from './ui-HeaderNetflix';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import useScroll from '../../hooks/useScroll';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'TV Show', path: '/tv' },
  { name: 'Movies', path: '/movies' },
  { name: 'My List', path: '/mylist' },
];

const HeaderNetflix = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const { isScrolled } = useScroll();

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
            <div
              className={`search flex a-center ${
                showSearchInput && 'show-search'
              }`}>
              <button className="btn-search" onClick={handleShowSearchInput}>
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="input-search"
                onMouseEnter={handleInputHover}
                onMouseLeave={handleInputHover}
                onBlur={() => {
                  setInputHover(false);
                  setShowSearchInput(false);
                }}
              />
            </div>
            <button className="btn-logout">
              <FaPowerOff />
            </button>
          </div>
        </nav>
      </div>
    </HeaderNetflixWrapper>
  );
};

export default HeaderNetflix;

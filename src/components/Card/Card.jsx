import { NETFLIX_URL_API, TMBD_IMAGE_URL } from '../../utils/constanst';
import CardWrapper from './ui-Card';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { memo, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import video from '../../assets/video.mp4';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase-config';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeMovieFromMyList } from '../../services/myList-services';

const Card = ({ movie, isLiked = false }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const handleNavigate = () => {
    navigate('/player');
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user.email);
    });
  }, []);

  const handleAddToList = async () => {
    if (currentUser) {
      const url = `${NETFLIX_URL_API}/api/user/add`;
      try {
        await axios.post(url, {
          email: currentUser,
          data: movie,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRemoveFromList = async () => {
    if (currentUser) {
      dispatch(
        removeMovieFromMyList({ email: currentUser, movieId: movie.id })
      );
    }
  };

  return (
    <CardWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="image-card flex">
        <img
          src={`${TMBD_IMAGE_URL}${movie?.image}`}
          alt={movie.original_title}
        />
      </div>
      {isHover && (
        <div className="hover">
          <div className="img-video__hover">
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={handleNavigate}></video>
          </div>
          <div className="info-movie flex column">
            <h3>{movie.name}</h3>

            <div className="icons-movie flex">
              <IoPlayCircleSharp title="play" onClick={handleNavigate} />
              <RiThumbUpFill title="like" />
              <RiThumbDownFill title="dislike" />
              {isLiked ? (
                <BsCheck
                  title="remove from List"
                  onClick={handleRemoveFromList}
                />
              ) : (
                <AiOutlinePlus
                  title="add to my List"
                  onClick={handleAddToList}
                />
              )}
              <BiChevronDown title="more Info" />
            </div>
          </div>
          <div className="genres-box flex">
            {movie.genres.map((name, index) => (
              <span key={index}>{name}</span>
            ))}
          </div>
        </div>
      )}
    </CardWrapper>
  );
};

export default memo(Card);

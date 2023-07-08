import PlayerWrapper from './ui-Player';
import video from '../../assets/video.mp4';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  return (
    <PlayerWrapper>
      <span className="back-icon flex a-center j-center">
        <BsArrowLeft title="Back" onClick={() => navigate(-1)} />
      </span>
      <video src={video} autoPlay loop muted />
    </PlayerWrapper>
  );
};

export default Player;

import PlayerWrapper from './ui-Player';
import video from '../../assets/video.mp4';
import BackArrow from '../../components/BackArrow/BackArrow';

const Player = () => {
  return (
    <PlayerWrapper>
      <BackArrow />
      <video src={video} autoPlay loop muted />
    </PlayerWrapper>
  );
};

export default Player;

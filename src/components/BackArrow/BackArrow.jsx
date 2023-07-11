import { BsArrowLeft } from 'react-icons/bs';
import BackArrowWrapper from './ui-BackArrow';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <BackArrowWrapper>
      <span className="back-icon flex a-center j-center">
        <BsArrowLeft title="Back" onClick={() => navigate(-1)} />
      </span>
    </BackArrowWrapper>
  );
};

export default BackArrow;

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import SliderActionWrapper from './ui-SliderAction';

const SliderAction = ({ left, right, isShow, onClick }) => {
  return (
    <SliderActionWrapper className="flex a-center">
      {isShow && (
        <>
          <span className="slider-action left" onClick={() => onClick('left')}>
            {left && <AiOutlineLeft />}
          </span>
          <span
            className="slider-action right"
            onClick={() => onClick('right')}>
            {right && <AiOutlineRight />}
          </span>
        </>
      )}
    </SliderActionWrapper>
  );
};

export default SliderAction;

import LoadingWrapper from './ui-Loading';

const Loading = () => {
  return (
    <LoadingWrapper className="flex a-center j-center">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;

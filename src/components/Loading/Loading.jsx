import LoadingWrapper from './ui-Loading';

const Loading = () => {
  return (
    <LoadingWrapper className="flex a-center j-center">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;

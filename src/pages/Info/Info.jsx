import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import InfoWrapper from './ui-Info';
import BackArrow from '../../components/BackArrow/BackArrow';

const Info = () => {
  const movieInfo = useSelector((state) => state.netflix.movieInfo);

  const {
    image,
    name,
    genres,
    overview,
    tagline,
    title,
    vote_rating,
    vote_count,
    url,
  } = movieInfo;

  return (
    <NetflixLayout>
      <InfoWrapper className="flex a-center">
        <BackArrow />
        <img src={`${TMBD_IMAGE_URL}${image}`} alt={name} />
        <div className="container-info flex">
          <div className="info-movie">
            <h1>{name || title}</h1>
            <h2>
              {title}
              {tagline && <span>: {tagline}</span>}
            </h2>
            <p>{overview}</p>
            <p>Genres: {genres?.join(', ')}</p>
            <div className="vote flex">
              <p>Votes: {vote_count} votes</p>
              <p>Rating: {vote_rating} / 10</p>
            </div>
          </div>
        </div>
      </InfoWrapper>
    </NetflixLayout>
  );
};

export default Info;

import { useDispatch } from 'react-redux';
import SelectGenreWrapper from './ui-SelectGenre';
import { apiFetchMovieByGenre } from '../../services/movie-services';
import { useEffect } from 'react';

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(apiFetchMovieByGenre({ type, genre: value }));
  };

  useEffect(() => {
    handleChange({ target: { value: type } });
  }, []);

  return (
    <SelectGenreWrapper onChange={handleChange}>
      <option>Select</option>
      {genres.map(({ id, name }, idx) => (
        <option key={idx} value={id}>
          {name}
        </option>
      ))}
    </SelectGenreWrapper>
  );
};

export default SelectGenre;

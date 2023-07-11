import MyListWrapper from './ui-MyList';
import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../utils/firebase-config';
import { getMyList } from '../../services/myList-services';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';

const MyList = () => {
  const [email, setEmail] = useState(null);
  const movies = useSelector((state) => state.netflix.myList);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setEmail(user.email);
    }
  });

  useEffect(() => {
    if (!email) return;
    dispatch(getMyList(email));
  }, [email]);

  return (
    <NetflixLayout>
      <MyListWrapper>
        <h1 className="mylist-title">My List</h1>
        <div className="mylist-container flex a-center">
          {movies.map((movie, index) => (
            <Card movie={movie} isLiked key={index} />
          ))}
        </div>
      </MyListWrapper>
    </NetflixLayout>
  );
};

export default MyList;

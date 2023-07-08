import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase-config';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) return;
        else setUser(user);
      });
    });

    return () => {
      clearTimeout(getUser);
    };
  }, []);

  return { user };
};

export default useUser;

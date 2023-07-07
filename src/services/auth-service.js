import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase-config';

const login = async (data) => {
  try {
    const { email, password } = data;

    console.log({ email, password });
    if (!email || !password) return;
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (data) => {
  try {
    const { email, password } = data;
    if (!email || !password) return;
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export { login, createUser };

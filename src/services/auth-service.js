import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../utils/firebase-config';

const login = async (data) => {
  try {
    const { email, password } = data;

    if (!email || !password) return;
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
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

export { login, createUser, logout };

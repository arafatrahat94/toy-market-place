import React, { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //   create user
  const creatUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // update name and photourl
  const Update = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   sign in
  const signI = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const glog = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser && currentUser?.email) {
        const loggedUser = {
          email: currentUser.email,
        };
        fetch(`http://localhost:8001/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("toy-access", data.token));
      } else localStorage.removeItem("toy-access");
      setUser(currentUser);
    });

    return () => unsub();
  }, []);
  console.log(user);
  const authData = {
    creatUser,
    Update,
    user,
    logout,
    glog,
    signI,
    setUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

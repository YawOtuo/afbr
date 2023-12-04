"use client";

import { auth } from "@/lib/utils/firebase";
import axios from "axios";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { url } from "../../weburl";
import { setUserDetails, setUserSQLDBDetails } from "@/lib/redux/reducers/users";

export default function ReduxProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      dispatch(setUserDetails(user));

      axios
        .get(`${url}api/users/getUserByUid/${user.uid}`)
        .then((res) => {
            console.log(res.data)
            dispatch(setUserSQLDBDetails(res.data[0]))
         
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, loading]);
  return <div> {children}</div>;
}

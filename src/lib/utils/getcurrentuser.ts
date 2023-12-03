
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const getFirebaseUser = (object) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
            object.setState({ user }, () => console.log(object.state));
            console.log('onAuthState', user.displayName, user.uid, user.email)
          } else {
            object.setState({ user: null });
            console.log('usershmm')

          }
      
          if (object.state.loading) {
            object.setState({ loading: false });
          }
    });
   
}
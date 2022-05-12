import auth from '@react-native-firebase/auth';
export default function EmailPassSignIn({user, pass, setErr}) {
    auth()
    .createUserWithEmailAndPassword(user, pass)
    .then(() => {
      console.log('User account created & signed in!', user, pass);
      setErr('')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setErr('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        setErr('That email address is invalid!');
      }
      console.error(error);
    });
}
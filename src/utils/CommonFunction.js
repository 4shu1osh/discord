import Auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NativeModules} from 'react-native';
const {RNTwitterSignIn} = NativeModules;


/**
 * @function logInWithTwitter
 * @description Log in via twitter
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */
async function logInWithTwitter(successCallback, failureCallback) {
  try {
    const {authToken, authTokenSecret} = await RNTwitterSignIn.logIn();
    console.log(authToken)
    const twitterCredential = Auth.TwitterAuthProvider.credential(authToken, authTokenSecret);
    Auth().signInWithCredential(twitterCredential)
    .then(data=> {
    console.log('helllooooo');
    console.log("daat", data)
  })
  .catch((err)=> {
    console.log("helloo errr", err)
  })
} catch (error) {
  console.log(error)
}
}

GoogleSignin.configure({
  webClientId:
    '645700229771-mum9dmsc0hivp4hmc8bueuravnsnv9hq.apps.googleusercontent.com',
});


/**
 * @function logInWithGoogle
 * @description Log in via Google
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */
async function logInWithGoogle(successCallback, failureCallback) {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
  Auth()
    .signInWithCredential(googleCredential)
    .then(successCallback)
    .catch(error => {
      console.log(error.code);
      failureCallback(authErrorHandling(error.code));
    });
}

/**
 * @function logInWithFacebook
 * @description Log in via Facebook
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */
async function logInWithFacebook(successCallback, failureCallback) {
  LoginManager.logOut();

  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  const {accessToken} = await AccessToken.getCurrentAccessToken();
  const facebookCredential = Auth.FacebookAuthProvider.credential(accessToken);
  Auth()
    .signInWithCredential(facebookCredential)
    .then(data => {
      successCallback(data);
    })
    .catch(error => {
      console.log(error.code);
      failureCallback(authErrorHandling(error.code));
    });
}

/**
 * @function logInWithPhoneNumber
 * @description Log in via phone number
 * @param {*} phone 
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

function logInWithPhoneNumber(phone, successCallback, failureCallback) {
  Auth()
    .signInWithPhoneNumber(phone)
    .then(confirmation => {
      successCallback(confirmation);
    })
    .catch(error => {
      console.log(error.code);
      failureCallback(authErrorHandling(error.code));
    });
}

function confirmCode(code, confirm, successCallback, failureCallback) {
  confirm
    .confirm(code)
    .then(successCallback)
    .catch(error => {
      console.log(error.code);
      failureCallback(authErrorHandling(error.code));
    });
}

/**
 * @function logInWithEmailAndLink
 * @description Log in via email and link
 * @param {*} email
 * @param {*} emailLink
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

function logInWithEmailAndLink(
  email,
  emailLink,
  successCallback,
  failureCallback,
) {
  Auth()
    .signInWithEmailLink(email, emailLink)
    .then(loginUser => {
      successCallback(loginUser);
    })
    .catch(loginError => {
      failureCallback(authErrorHandling(loginError.code));
    });
}

/**
 * @function logInAnonymously
 * @description Log in anonymously
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */

function logInAnonymously(successCallback, failureCallback) {
  Auth()
    .signInAnonymously()
    .then(loginUser => {
      console.log(loginUser, '----------');
      successCallback(loginUser);
    })
    .catch(loginError => {
      console.log(loginError, '<<<<<<<----------');
      failureCallback(authErrorHandling(loginError.code));
    });
}

/**
 * @function logInWithEmailAndPassword
 * @description Log in via email and Password
 * @param {*} email
 * @param {*} password
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */


function logInWithEmailAndPassword(
  email,
  password,
  successCallback,
  failureCallback,
) {
  Auth()
    .signInWithEmailAndPassword(email, password)
    .then(loginUser => {
      successCallback(loginUser);
    })
    .catch(loginError => {
      failureCallback(authErrorHandling(loginError.code));
    });
}
/**
 * @function signUpWithEmailAndPassword
 * @description Sign up via email and Password
 * @param {*} email
 * @param {*} password
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */
const signUpWithEmailAndPassword = (
  email,
  password,
  successCallback,
  failureCallback,
) => {
  Auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userData => {
      successCallback(loginUser);
    })
    .catch(error => {
      failureCallback(authErrorHandling(error.code));
    });
};
/**
 * @function logoutWithFirebase
 * @description Log out with firebase
 * @param {*} successCallback 
 * @param {*} failureCallback 
 */
const logoutWithFirebase = (successCallback, failureCallback) => {
  Auth()
    .signOut()
    .then(successCallback)
    .catch(error => {
      console.log(error);
      failureCallback(authErrorHandling(error.code));
    });
};
/**
 * @function authErrorHandling
 * @description Error handling for log in and sign up methods
 * @param {*} errorMsg 
 * @returns 
 */
const authErrorHandling = errorMsg => {
  switch (errorMsg) {
    case 'auth/wrong-password':
      return 'Wrong email or password.';
      break;
    case 'auth/network-request-failed':
      return 'Network request failed.';
      break;
    case 'auth/invalid-email':
      return 'Invalid email.';
      break;
    case 'auth/weak-password':
      return 'Weak password.';
      break;
    case 'auth/no-current-user':
      return 'No user signed in';
      break;
    default:
      break;
  }
};

export default {
  confirmCode,
  logInWithGoogle,
  logInWithTwitter,
  logInAnonymously,
  logInWithFacebook,
  logoutWithFirebase,
  logInWithPhoneNumber,
  logInWithEmailAndLink,
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
};

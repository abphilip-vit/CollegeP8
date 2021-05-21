import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyDA4Qw9c5tZhNxAGZUzZafcRaSuZPUuqO4",
    authDomain: "tarp-project-ee72f.firebaseapp.com",
    databaseURL: "https://tarp-project-ee72f-default-rtdb.firebaseio.com",
    projectId: "tarp-project-ee72f",
    storageBucket: "tarp-project-ee72f.appspot.com",
    messagingSenderId: "487614395969",
    appId: "1:487614395969:web:07a9fca1efbb7b4ba078c0",
    measurementId: "G-24YQ0MJ5DE"
  };
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;

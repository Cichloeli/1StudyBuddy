import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/database'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp
(firebaseConfig)
const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true};
firestore.settings(settings);


export default firebaseApp.firestore()
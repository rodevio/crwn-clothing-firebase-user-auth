import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('dasdasdas').collection('cardItems').doc('sadjasjdsa');
firestore.doc('/users/dasdasdas/cardItems/sadjasjdsa');
firestore.collection('/users/dasdasdas/cardItems');
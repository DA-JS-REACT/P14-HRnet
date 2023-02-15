// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAY4Z5MebNhtl2a8TxhmGHwV1xAuzGJofM',
    authDomain: 'hrnet-p14.firebaseapp.com',
    databaseURL:
        'https://hrnet-p14-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'hrnet-p14',
    storageBucket: 'hrnet-p14.appspot.com',
    messagingSenderId: '996225636180',
    appId: '1:996225636180:web:cbc9c7a9988adfa505dac1',
    measurementId: 'G-QCM2ZLXY21',
}

// Initialize Firebase
export const Database = initializeApp(firebaseConfig)
const analytics = getAnalytics(Database)

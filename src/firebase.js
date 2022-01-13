import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
   getFirestore,
   collection,
   getDocs,
   query,
   where
} from 'firebase/firestore'

const firebaseConfig = {
   apiKey: 'AIzaSyBGp2Pnbz9Htx-jMVQPXXES7t0iA4tQwTw',
   authDomain: 'unique-nuance-310113.firebaseapp.com',
   projectId: 'unique-nuance-310113',
   storageBucket: 'unique-nuance-310113.appspot.com',
   messagingSenderId: '792357490687',
   appId: '1:792357490687:web:909acfb2bff17ba201a1ca',
   measurementId: 'G-C0SJ69KETV'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()
export default app

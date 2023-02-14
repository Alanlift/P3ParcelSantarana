import { initializeApp } from "firebase/app";
import {get, getDatabase, ref, child} from 'firebase/database'
import  compartirInstancia from '../scenes/EventCenter.js';
let datos = null;
const firebaseConfig = {

    apiKey: "AIzaSyC6ypMPctCLJatFNVp1t_oSdAyk6SJY4_U",
  
    authDomain: "datostukis.firebaseapp.com",
  
    databaseURL: "https://datostukis-default-rtdb.firebaseio.com",
  
    projectId: "datostukis",
  
    storageBucket: "datostukis.appspot.com",
  
    messagingSenderId: "414424077261",
  
    appId: "1:414424077261:web:7bfa145370f70b966caa84"
  
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  export async function getData(n){
    const dbRef = ref(db);
    get(child(dbRef, 'datos/'+n)).then((snapshot)=> {
        if (snapshot.exists()) {
            let dato = snapshot.val();
            compartirInstancia.emit('pasarDato', dato)
        } else {
            console.log("No data available (control)");
        }
    }).catch((error) => {
    console.error(error);
    });
}
import firebase from 'firebase';

const firebaseApp =firebase.initializeApp(

{

      apiKey: "AIzaSyA76gQDtPBAu_Oke2XhArjoIvVgfdduLlE",
      authDomain: "netflix-clone-947eb.firebaseapp.com",
      projectId: "netflix-clone-947eb",
      storageBucket: "netflix-clone-947eb.appspot.com",
      messagingSenderId: "826507489293",
      appId: "1:826507489293:web:d49b68f7dac044c968a544"

    
}
);



const db = firebaseApp.firestore();

 const auth= firebase.auth();


export { auth }
export default db;

// import firebase from "firebase/app";
// import "firebase/auth";

//  const firebaseConfig = {
//     apiKey: "AIzaSyA76gQDtPBAu_Oke2XhArjoIvVgfdduLlE",
//     authDomain: "netflix-clone-947eb.firebaseapp.com",
//      projectId: "netflix-clone-947eb",
//      storageBucket: "netflix-clone-947eb.appspot.com",
//     messagingSenderId: "826507489293",
//      appId: "1:826507489293:web:d49b68f7dac044c968a544"
//    };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//    const db = firebaseApp.firestore();//firestore - real time database
//    const myauth = firebaseApp.auth();
  
// export  { myauth }
//  export default db;
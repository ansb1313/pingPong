import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsr4iPKL7IcCaBV9vsaa_fL0_zpC0Rc7c",
  authDomain: "fresh-ocean-311118.firebaseapp.com",
  projectId: "fresh-ocean-311118",
  storageBucket: "fresh-ocean-311118.appspot.com",
  messagingSenderId: "616764296816",
  appId: "1:616764296816:web:2dba5baa6638edb182aeb5",
  measurementId: "G-2C3V8SHY14",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드

provider.setCustomParameters({prompt: "select_account"});
// signin이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 팝업을 띄우기 위한 코드

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const signWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. (페이스북, 깃허브 ...)
// 여기서는 google로 signIn 할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

export const firebaseInstance = firebase; // 소셜로그인
export const authService = firebase.auth; // 로그인 모듈
export const dbService = firebase.firestore(); // NoSQL 데이터베이스
export const storageService = firebase.storage(); // 이미지 저장 스토리지

export default firebase;
// 전체 라이브러리가 필요할 때를 대비해 firebase 도 export를 해둔다.

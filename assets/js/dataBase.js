
// ! COMING SOON
// /* FIREBASE DATABASE START *****************************************************************************/
// /*******************************************************************************************************/
// /*******************************************************************************************************/

// // ? Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyDQnuqMb9fmJ81avmlvmbrWEaFbuyL11xI",
//     authDomain: "training-day-app-noonxpand.firebaseapp.com",
//     databaseURL: "https://training-day-app-noonxpand.firebaseio.com",
//     projectId: "training-day-app-noonxpand",
//     storageBucket: "training-day-app-noonxpand.appspot.com",
//     messagingSenderId: "958534343338",
//     appId: "1:958534343338:web:391341b429aa4e458cced3",
//     measurementId: "G-S5XEVFNLZW"
// };
// // ? Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // ? setup.variables
// let db = firebase.database();
// let FreeCodeReviewBox = document.getElementById('ulCacheCache');
// let freeButtonToClick = document.getElementById('validateFreeCode');
// let freecodecampReviewRef = db.ref("/freeCCValues");

// // ! Create
// freeButtonToClick.addEventListener('click', e => {
//     // e.preventDefault();
//     let FreeCodeInputFill = document.getElementById('howFreeCodeCamp');
//     let hiddenFreeCodeId = document.getElementById("hiddenFreeCodeId");

//     let id = hiddenFreeCodeId.value || Date.now();

//     db.ref("freeCCValues/" + id).set({
//         FreeCodeInputFill: FreeCodeInputFill.value
//     });
// });

// // ! Read


// freecodecampReviewRef.on("child_added", data => {
//     var FreeCodeli = document.createElement("p");
//     FreeCodeli.id = data.key;
//     FreeCodeli.className = 'TheKeys';
//     FreeCodeli.innerHTML = data.val().FreeCodeInputFill;
//     FreeCodeReviewBox.appendChild(FreeCodeli);
// });

// console.log(typeof document.getElementsByClassName('TheKeys'));


// /* FIREBASE DATABASE END *******************************************************************************/
// /*******************************************************************************************************/
// /*******************************************************************************************************/
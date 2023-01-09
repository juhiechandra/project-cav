<script>
  import { doc, getDoc } from "firebase/firestore";
  import { db, auth } from "./firebase.js";
  import { collection, query, where, getDocs } from "firebase/firestore";
  import { onSnapshot } from "firebase/firestore";
  import { orderBy, limit } from "firebase/firestore";
  import {
    setDoc,
    addDoc,
    serverTimestamp,
    updateDoc,
    increment,
    deleteDoc,
  } from "firebase/firestore";

  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

  import { onMount } from "svelte";

  let myIntern = [];

  let email;

  let fetchDocument = async () => {
    let docRef = doc(db, "MyIntern", "aach");
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // let fetchCollection = async () => {
  //   const q = query(collection(db, "MyIntern"));

  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     myIntern = [...myIntern, doc.data()];
  //   });
  // };

  let fetchCollection = async () => {
    // const q = query(collection(db, "MyIntern"));
    onSnapshot(
      query(collection(db, "MyIntern"), orderBy("name"), limit(100)),
      (querySnapshot) => {
        myIntern = [];
        querySnapshot.forEach((doc) => {
          myIntern = [...myIntern, doc.data()];
        });
      }
    );
  };
  fetchCollection();

  let addIntern = async () => {
    // await setDoc(
    //   doc(db, "MyIntern", "aakrh"),
    //   {
    //     name: "Aakanksha",
    //     age: 21,
    //   },
    //   { merge: true }
    // );
    await addDoc(collection(db, "MyIntern"), {
      name: "Tom Cruise",
      age: 55,
      timestamp: serverTimestamp(),
    });
  };

  let incrementAge = async () => {
    await updateDoc(doc(db, "MyIntern", "gcrh"), {
      age: increment(1),
    });
  };
  let deleteDocument = async () => {
    await deleteDoc(doc(db, "MyIntern", "brch"));
  };

  let register = async () => {
    let email = "aach@gmail.com";
    let password = "password";
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User Details", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  let login = async () => {
    let email = "aach@gmail.com";
    let password = "password";
    // let password = 'pwd';
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User Details", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  let logout = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  onMount(async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Signed In
        console.log("User Data", user);
        email = user.email;
      } else {
        email = null;
        console.log("User is not logged in");
      }
    });
  });

</script>

<main class="main_ele">
  Hello World

  {#each myIntern as myself}
    <p>{myself.name}</p>
    <p>{myself.age}</p>
  {/each}

  <button on:click={addIntern}>Add Intern</button>
  <button on:click={incrementAge}>Increment Age</button>
  <button on:click={deleteDocument}>Delete Document</button>

  <div>
    {#if email}
      <p>User: {email}</p>
    {:else}
      <p>User is not signed-in</p>
    {/if}
    <button on:click={register}>Register</button>
    <button on:click={login}>Login</button>
    <button on:click={logout}>Logout</button>
  </div>


</main>



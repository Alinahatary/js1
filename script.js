
export const login_email = document.querySelector("#login_email")
export const login_pass = document.querySelector("#login_pass")
export const login = document.querySelector("#login")

export const signup_email = document.querySelector("#signup_email")
export const signup_pass = document.querySelector("#signup_pass")
export const signup_repeat_pass = document.querySelector("#signup_repeat_pass")
export const singup = document.querySelector("#singup")

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
	import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
	//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
	//import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
	
	
	const firebaseConfig = {
	  apiKey: "AIzaSyDcqQJYyBja5rna52ZS5Mbb9KQE8igVs-0",
	  authDomain: "test-task1-signin.firebaseapp.com",
	  projectId: "test-task1-signin",
	  storageBucket: "test-task1-signin.appspot.com",
	  messagingSenderId: "797939383285",
	  appId: "1:797939383285:web:f0e0d2ba0cc47f94ebfebc",
	  measurementId: "G-16PMWPP2T8"
	};
  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	//const analytics = getAnalytics(app);
	//const database = getDatabase(app);
    const auth = getAuth(app);
    const loginByEmailPassword = async () => {
        const login_email_value = login_email.value;
        const login_pass_value = login_pass.value;
        try {
            await signInWithEmailAndPassword(auth, login_email_value, login_pass_value);
            alert("Welcome!");
            window.location.href = "./login.html";
        } catch (error) {
            alert("Login error")
        }
    }
    
    const registerByEmailPasswordNumber = async () => {
        const reg_email = signup_email.value;
        const reg_pass = signup_pass.value;
        const reg_value = signup_repeat_pass.value;
    
        try{
            if (reg_pass!=reg_value) alert("Registration error");
            await createUserWithEmailAndPassword(auth, reg_email, reg_pass);
            alert("Successful registration");
            window.location.href = "../signup.html";
        }
        
        catch (error){
            alert("Registration error");
        }
    }
    if (window.location.pathname==="/login.html"){
        login.addEventListener("click", loginByEmailPassword)
    }
    else if (window.location.pathname==="/signup.html"){
        singup.addEventListener("click", registerByEmailPasswordNumber)
    }

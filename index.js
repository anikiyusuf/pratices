// alert("Welcome!")
// getUserDetails()
// alert("Ok, Goodbye")


// /**
//  * A function to display a user details
//  */
// function getUserDetails() {

//     let username = prompt("Enter your username")

//     while (!validateUsername(username)) {
//         if (username === null) return
//         username = prompt("Enter your username. Username must be less than 10")
//     }


//     let password = prompt("Enter your password")

//     while (!validatePassword(password)) {
//         if (password === null) return
//         password = prompt("Enter your password.")
//     }

//     let passwordAgain = prompt(`Enter your password again`)

//     while (password !== passwordAgain) {
//         if (passwordAgain === null) return
//         passwordAgain = prompt("Password do not match! Confirm your password again.")
//     }

//     const userDetails = userStore[username]

//     if (!userDetails) {
//         alert(`User ${username} does not exist. Please register`)
//         return
//     }

//     if (userDetails.password !== password) {
//         alert(`Password is incorrect. Please try again`)
//         return
//     }

//     alert(`Showing details for ${username}: \n
//     First Name: ${userDetails.firstName} \n
//     Last Name: ${userDetails.lastName} \n
//     Email: ${userDetails.email} \n
//     profession: ${userDetails.profession}
//     `)
// }

// /**
//  * A function to validate the username
//  * @param {string} username 
//  * @returns boolean
//  */
// function validateUsername(username) {
//     if (!username) return false
//     if (username.length > 10) return false
//     return true
// }

// /**
//  * A function to validate the password
//  * @param {string} password 
//  * @returns boolean
//  */
// function validatePassword(password) {
//     if (!password) return false
//     if (password.length < 6) return false
//     if (password.length > 15) return false
//     return true

// }

// /**
//  * A user store object
//  * @type {object}
//  * */
// const userStore = {
//     "Ada": {
//         firstName: "Ada",
//         lastName: "Lovelace",
//         email: "adalovelace@mail.com",
//         profession: "Computer programmer",
//         password: "12345Ada"
//     },
//     "Yemi": {
//         firstName: "Yemi",
//         lastName: "Adebisi",
//         email: "yemi_adebisi@gmail.com",
//         profession: "Software Engineer",
//         password: "12345Yemi"
//     },
// }



var myInput= document.getElementById("passWordEle");
var ConfirmInput = document.getElementById("confirmPassWordEle")
var letterEle = document.getElementById("letter");
var capitalEle =  document.getElementById("capital");
var numEle = document.getElementById("number");
var lengthEle = document.getElementById("length");
var submit = document.getElementById("submitEle")


//when the user click on the password field show thr message box
myInput.onfocus = function(){
    document.getElementById("message").style.display ="block"
}

//when the user clicks outside of the password field , hide the message box 
myInput.onblur = function(){
    document.getElementById("message").style.display ="none";

}

myInput.onkeyup= function(){
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)){
        letterEle.classList.remove("invalid");
        letterEle.classList.add("valid");
    }else {
        letterEle.classList.remove("valid");
        letterEle.classList.add("invalid");
    }
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)){
        numEle.classList.remove("invalid");
        numEle.classList.add("valid")
    }else {
       numEle.classList.remove("valid");
       numEle.classList.add("invalid")
    }
    if(myInput.value.length >= 8){
        lengthEle.classList.remove("invalid");
        lengthEle.classList.add("valid");
    }else{
        lengthEle.classList.remove("valid");
        lengthEle.classList.add("invalid");
    }
}








//when the user click on the password field show thr message box
ConfirmInput.onfocus = function(){
    document.getElementById("message").style.display ="block"
}

//when the user clicks outside of the password field , hide the message box 
ConfirmInput.onblur = function(){
    document.getElementById("message").style.display ="none";

}

ConfirmInput.onkeyup= function(){
    var lowerCaseLetters = /[a-z]/g;
    if(ConfirmInput.value.match(lowerCaseLetters)){
        letterEle.classList.remove("invalid");
        letterEle.classList.add("valid");
    }else {
        letterEle.classList.remove("valid");
        letterEle.classList.add("invalid");
    }
    var numbers = /[0-9]/g;
    if(ConfirmInput.value.match(numbers)){
        numEle.classList.remove("invalid");
        numEle.classList.add("valid")
    }else {
       numEle.classList.remove("valid");
       numEle.classList.add("invalid")
    }
    if(ConfirmInput.value.length >= 8){
        lengthEle.classList.remove("invalid");
        lengthEle.classList.add("valid");
    }else{
        lengthEle.classList.remove("valid");
        lengthEle.classList.add("invalid");
    }
};



submit.addEventListener('click' ,()=>{
    if (myInput.value === ConfirmInput.value){
    alert("passed")
    }else if(myInput.value !== ConfirmInput.value){
        alert("repassed")
     }else{
        alert("input")
     }
})






var useremail=document.getElementById("mail")
var userpassword=document.getElementById("password")
var loginport=document.getElementById("go")

let userlist = localStorage.getItem("userConatiner")
        ? JSON.parse(localStorage.getItem("userContainer"))
        : [];

function login(){

    var account={
        email:useremail.value.trim(),
        password:userpassword.value.trim(),
    }
    console.log(account)
    clearform()
}

function clearform(){
    useremail.value=""
    userpassword.value=""

}

function addnew(){

    var mailisvalid=inputsvalidation(useremail);
    var passwordisvalid=inputsvalidation(userpassword);
    if(mailisvalid&&passwordisvalid){
        console.log("valid");
        login();
        window.open("file:///D:/ass%2011/home.html")
    } else{
        document.getElementById("msg").classList.remove("d-none");
        console.log("invalid");
        
    }
    let useraccount = { mail: useremail, password: userpassword };
        userlist.push(useraccount);
        console.log("User list before saving:", userlist);
        localStorage.setItem("userContainer", JSON.stringify(userlist));
       
        localStorage.setItem("userContainer", JSON.stringify(userlist));
        let savedData = JSON.parse(localStorage.getItem("userContainer"));
       
        if (savedData) {
            console.log("Data saved successfully:", savedData);
        } else {
            console.error("Failed to save data.");
        }
       
        msg.classList.add("d-none");
        console.log("User successfully signed up:", newUser);
 
        clearform();
        window.open("file:///D:/ass%2011/home.html");
}



function inputsvalidation(elemnt){
   var regex={
    mail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
   }
   var isvalid=regex[elemnt.id].test(elemnt.value.trim());
   console.log(isvalid)
   if(isvalid){
elemnt.classList.add("is-valid");
elemnt.classList.remove("is-invalid");
document.getElementById("msg").classList.add("d-none")}

else{
    elemnt.classList.remove ("is-valid");
    elemnt.classList.add("is-invalid");
    document.getElementById("msg").classList.remove("d-none");
}

return isvalid;
   }

loginport.onclick=addnew



// -------------------------------------------------------------
// -----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    let emailuser = document.getElementById("email");
    let passworduser = document.getElementById("newpassword");
    let nameInput = document.getElementById("name");
    let signUpBtn = document.getElementById("signup");
    let msg = document.getElementById("msg1");
    window.signUp = signUp;
 
 
    let userlist = localStorage.getItem("userConatiner")
        ? JSON.parse(localStorage.getItem("userContainer"))
        : [];
 
    function signUp() {
        let emailu = emailuser.value.trim().toLowerCase();
        let passwordu = passworduser.value.trim();
        let name = nameInput.value.trim();
 
        let isEmailValid = validate(emailuser);
        let isPasswordValid = validate(passworduser);
        let isNameValid = name.length > 0;
 
        if (!isNameValid) {
            nameInput.classList.add("is-invalid");
            nameInput.classList.remove("is-valid");
            msg.classList.remove("d-none");
            msg.textContent = "Name cannot be empty.";
            return;
        } else {
            nameInput.classList.remove("is-invalid");
            nameInput.classList.add("is-valid");
        }
 
        if (!isEmailValid || !isPasswordValid) {
            msg.classList.remove("d-none");
            msg.textContent = "Please provide valid email and password.";
            return;
        }
 
        let isUniqueEmail = !userlist.some(
            (account) => account.email === emailu
        );
 
        if (!isUniqueEmail) {
            msg.classList.remove("d-none");
            msg.textContent = "This email is already registered.";
            return;
        }
 
        let newUser = {name, email: emailu, password: passwordu };
        userlist.push(newUser);
        console.log("User list before saving:", userlist);
        localStorage.setItem("userContainer", JSON.stringify(userlist));
       
        localStorage.setItem("userContainer", JSON.stringify(userlist));
        let savedData = JSON.parse(localStorage.getItem("userContainer"));
       
        if (savedData) {
            console.log("Data saved successfully:", savedData);
        } else {
            console.error("Failed to save data.");
        }
       
        msg.classList.add("d-none");
        console.log("User successfully signed up:", newUser);
        window.open("file:///D:/ass%2011/home.html");
   
       
        clearInput();
       
    }
 
    function validate(ele) {
        let regex = {
            userEmai: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            userPassword: /^[0-9a-zA-Z]{8,}$/,
        };
        let isValidu = regex[ele.id].test(ele.value.trim().toLowerCase());
 
        if (isValidu) {
            ele.classList.add("is-valid");
            ele.classList.remove("is-invalid");
            msg.classList.add("d-none");
        } else {
            ele.classList.remove("is-valid");
            ele.classList.add("is-invalid");
            msg.classList.remove("d-none");
        }
        return isValidu;
    }
 
    function clearInput() {
        emailuser.value = "";
        passworduser.value = "";
        nameInput.value = "";
    }
 
    if (signUpBtn) {
        signUpBtn.addEventListener("click", signUp);
        window.open("file:///D:/assignment/assignment-js-4-loginin/home.html");
    }else{
        console.log("not valid")
    }
});
 


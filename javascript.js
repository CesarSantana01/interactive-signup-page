const pass = document.querySelector("#password");
const conPass = document.querySelector("#confirmPassword");
const submit = document.querySelector("#createAccount");
const conPassvalidity = document.querySelector("#confirmPassword");
submit.addEventListener("click", e => {

    conPassvalidity.setCustomValidity("");
    const pass = document.querySelector("#password").value;
    const conPass = document.querySelector("#confirmPassword").value;

    if(conPass == ""){
   
        conPassvalidity.setCustomValidity("This field cannot empty. D:");
    }else if(pass != conPass){
        conPassvalidity.setCustomValidity("Passwords do not match. D:");
    }else if(pass == conPass){
        return
    }

})

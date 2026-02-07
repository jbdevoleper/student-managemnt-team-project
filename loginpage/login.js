function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
    
    const correctusername="sachin";
    const correctpassword="sachin143m";
if (username === correctusername && password === correctpassword){
    alert("login successful");
} else{
    error.textContent="invalide username or password";
}
    
}
 
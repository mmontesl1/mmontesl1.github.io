function login(){
    var user, password;
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "admin" && password == "admin"){
        alert("Bienvenido");
        window.location = "./index.html";
    }else{
        alert("Datos Incorrectos");
    }
}
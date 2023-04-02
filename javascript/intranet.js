//se valida si se inicio sesion, si no no te deja ingresar a el index hasta que inicie sesion

// const user = JSON.parse(localStorage.getItem('login_success')) || false
// if(!user){
//     window.location.href = './index.html'
// }else{
//     window.location.href = './intranet.html'
// }
// boton del logout
const logout = document.querySelector('header nav .container .logout')
logout.addEventListener('click', ()=>{
    alert("Hasta pronto")
    localStorage.removeItem('login_success')
    window.location.href = "index.html"
})
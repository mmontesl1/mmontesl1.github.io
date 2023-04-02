const signoutform = document.querySelector('.right-form #signoutform')
signoutform.addEventListener('submit', (e)=>{
    e.preventDefault()

    //se toman los 3 campos del formulario de registro

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    //chequear que el mail no este dentro de la DB(LOCALSTORAGE) si esta no lo guardamos y si no esta si lo guardamos
    //si el storage tiene usuarios me lo guarda en users de lo contrario sera un array vacio 
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registrado')
    }
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert("Registro exitoso")
    //redireccion a login
    window.location.href = './login.html'
} )

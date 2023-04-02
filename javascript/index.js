const loginform = document.querySelector('.right-form #loginform')
loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_succes', JSON.stringify(validUser))
    window.location.href = './intranet.html'
})


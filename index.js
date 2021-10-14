// Arreglo de usuarios, login, password, saldo inicial en cuenta
var cuentas = [
  { nombre: 'Norma', saldo: 200, password: '123' },
  { nombre: 'Marynes', saldo: 290, password: '123' },
  { nombre: 'Diego', saldo: 67, password: '123' },
  { nombre: 'Rob', saldo: 50, password: '123' },
]

//Variables de validación de credenciales
var validacionNombre = false
var validacionPassword = false
var usuarioDatos

//Usuario introduce credenciales para acceder al sistema
//const usuarioNombre = prompt('Introduce tu nombre de usuario')

//Esta funcion es llamada cuando se ha validado al usuario
function revisaPassword() {
  while (validacionPassword === false) {
    let usuarioPassword = prompt('Introduce tu password')

    if (usuarioDatos.password === usuarioPassword) {
      console.log(
        `Hola ${usuarioDatos.nombre} bienvenid@, puedes hacer transacciones`
      )
      validacionPassword = true
    } else
      console.log('Lo siento, tu password es incorrecto.  Intenta nuevamente.') // no existe
  }
}

//Valida si el nombre de usuario existe y permanece hasta que el usuario introduzca un nombre válido
while (validacionNombre === false) {
  const usuarioNombre = prompt('Introduce tu nombre de usuario')
  const busca = cuentas.find(({ nombre }) => nombre === usuarioNombre)
  if (busca) {
    validacionNombre = true
    usuarioDatos = cuentas.find(({ nombre }) => nombre === usuarioNombre)
    revisaPassword()
  } else {
    console.log('no existe tal usuario, por favor ingresa nuevamente')
  }
}

console.log('hasta aqui todo bien')

let opcion = prompt('Introduce 1. Para )



/*
Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password
es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es
correcto, debes mostrar las siguientes opciones:
1. Consultar saldo
2. Ingresar monto
3. Retirar monto
*/

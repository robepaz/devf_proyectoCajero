// Arreglo de usuarios, login, password, saldo inicial en cuenta
var cuentas = [
  { nombre: 'Norma', saldo: 200, password: '123' },
  { nombre: 'Marynes', saldo: 290, password: '123' },
  { nombre: 'Diego', saldo: 67, password: '123' },
  { nombre: 'Rob', saldo: 100, password: '123' },
]

//Variables de validación de credenciales
var validacionNombre = false
var validacionPassword = false
var usuarioDatos = 10
var seleccionaOperacion = false
var opcion = '2'

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

var nuevoSaldo = usuarioDatos.saldo

while (!seleccionaOperacion) {
  let opcion = prompt(
    'Introduce 1. Para consultar saldo.  2. Para ingresar monto.  3. Para retirar monto  4. Para salir'
  )
  switch (opcion) {
    case '1':
      console.log(`Tu saldo es: ${nuevoSaldo}.`)

      break

    case '2':
      let ingreso = prompt('Introduce la cantidad a ingresar')

      if (parseFloat(ingreso) + nuevoSaldo < 991) {
        nuevoSaldo = parseFloat(ingreso) + nuevoSaldo
        console.log(`Ingresaste ${ingreso}, tu saldo es 
          ${nuevoSaldo}
        `)
      } else {
        console.log(
          `Lo siento, tu saldo es ${
            parseFloat(ingreso) + nuevoSaldo
          } y excede 990, no se pudo completar la transaccion`
        )
      }

      break

    case '3':
      let retiro = prompt('Introduce la cantidad a retirar')

      if (nuevoSaldo - parseFloat(retiro) > 10) {
        nuevoSaldo = nuevoSaldo - parseFloat(retiro)
        console.log(`Retiraste ${retiro}, tu saldo es 
          ${nuevoSaldo}
        `)
      } else {
        console.log(
          `Lo siento, tu saldo es ${
            nuevoSaldo - parseFloat(retiro)
          } y es menor a 10, no se pudo completar la transaccion`
        )
      }

      break

    case '4':
      seleccionaOperacion = true
  }
}

console.log('Gracias por usar nuestro cajero')

/*
Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password
es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es
correcto, debes mostrar las siguientes opciones:
1. Consultar saldo
2. Ingresar monto
3. Retirar monto
*/

// Arreglo de usuarios, login, password, saldo inicial en cuenta
var cuentas = [
  { nombre: 'Norma', saldo: 200, password: '123' },
  { nombre: 'Marynes', saldo: 290, password: '123' },
  { nombre: 'Diego', saldo: 67, password: '123' },
  { nombre: 'Rob', saldo: 50, password: '123' },
]

//Variables de validación de credenciales
let validacionNombre = false
let validacionPassword = false

//Usuario introduce credenciales para acceder al sistema
const usuarioNombre = prompt('Introduce tu nombre de usuario')



//Valida si usuario existe y su password es correcto


const busca = cuentas.find(({ nombre }) => nombre === usuarioNombre)
if (busca) {
  //console.log(busca.password) // devuelve datos de usuario
  const usuarioPassword = prompt('Introduce tu password')

  if (busca.password === usuarioPassword) {
    
    console.log(`Hola ${busca.nombre}, puedes hacer transacciones`)
    validacionNombre = true
  }
} else {

  console.log('Lo siento, no existe un usuario con tu nombre.  Intenta nuevamente.') // no existe
}
/*
//Valida si 

const password = prompt('Introduce tu password');


const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  const result = inventory.find( ({ name }) => name === 'cherries' );
  
  console.log(result) // { name: 'cherries', quantity: 5 }

*/

/*
var jugador1 = prompt('Jugador 1, qué eliges? piedra, papel o tijera?')

Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password
es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es
correcto, debes mostrar las siguientes opciones:
1. Consultar saldo
2. Ingresar monto
3. Retirar monto
*/

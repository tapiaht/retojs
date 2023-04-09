/*/reto64
En este desafío, tendrás que implementar un sistema de pagos utilizando polimorfismo en JavaScript.
1.Se debe crear una clase base llamada Pay que contenga un único método llamado makePay. Este método recibirá la cantidad a pagar y devolverá un objeto con dos propiedades
realized: true
quantity: $cantidadAPagar
2 Además, se deben crear también las clases PayPal, Card y Cash, donde cada una debe heredar de la clase Pay.
3. La clase PayPal debe recibir un email en el constructor y el método makePay debe agregar las propiedades:
platform: "PayPal"
email: $EmailRecibido.
La clase Card recibirá un número de tarjeta de 16 dígitos. Al momento de acceder al método makePay, se validará si la tarjeta en cuestión tiene esa longitud. En caso de no tener los 16 dígitos, se debe retornar un error. En caso contrario, al método que proviene de Pay, se le agregará la propiedad de lastCardNumber: donde se devolverán los últimos 4 dígitos de la tarjeta.
La clase Cash simplemente nos devolverá lo mismo que la clase base.
4. Por último se debe implementar la lógica de la función processPay la cual recibirá un método de pago y la cantidad, para poder devolver el objeto llamando al método makePay de cada entidad recibida.

Cada clase tiene su propio archivo dentro del sistema de archvios del playground

export class Pay {
	constructor(realized,quantity){
		this.realized=realized
		this.quantity=quantity
	}
  makePay($cantidadAPagar){
	  this.realized=true
	  this.quantity=$cantidadAPagar
	  return this
  }
}
const pago = new Pay()
pago.makePay(32)

import { Pay } from "./Pay.class.js";

export class PayPal extends Pay {
  constructor(email){
    super()
    this.email=email
  }
  makePay(quantity){
    return {
      ...super.makePay(quantity),
      platform:"PayPal",
      email:this.email
    }
  }
}
*/
import { Pay } from "./Pay.class.js";

export class Card extends Pay {
  // Tu código aquí 👈
  constructor(CardNumbers){
    super()
    this.CardNumbers=CardNumbers
  }
  makePay(quantity){
    if (this.CardNumbers.length!==16)
      throwError('No tiene 16 dígitos')
    return {...super.makePay(quantity),lastCardNumber:this.CardNumbers.slice(-4)}
  }
}


export function processPay(method, quantity) {
  return method.makePay(quantity)
}
const card = new Card("4913478952471122")
processPay(card, 100)
//export function processPay(method, quantity) {
  // Tu código aquí 👈
//}

/*
{
  realized: true,
  quantity: 100,
  lastCardNumbers: "1122",
}
*/
//const paypal = new PayPal("test@mail.com")
//processPay(paypal, 240)
/*
{
  realized: true,
  quantity: 240,
  platform: "PayPal",
  email: "test@mail.com",
}
*/
//const cash = new Cash()
//processPay(cash, 400)
/*
{
  realized: true,
  quantity: 400,
}
*/
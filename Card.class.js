import { Pay } from "./Pay.class.js";

export class Card extends Pay {
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

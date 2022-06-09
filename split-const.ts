export class Calculator {
    static readonly ADDITION = '+';
    static readonly SUBTRACTION = '-'
    static readonly MULTIPLICATION = '*';
    static readonly DIVISION = '/'
    public static calculatate( fisrtOperand: number, secondOperand: number, operator: string) {
           switch (operator) {
               case this.ADDITION :
                   return fisrtOperand + secondOperand;
               case this.SUBTRACTION :
                   return fisrtOperand - secondOperand;
               case this.MULTIPLICATION:
                   return fisrtOperand * secondOperand;
               case this.DIVISION :
                   if (secondOperand !== 0){
                       return fisrtOperand/secondOperand;
                   }else {
                       console.log('can not device by 0');
                   }
               default :
                   console.log('unsupported operation');
           }
    }
}
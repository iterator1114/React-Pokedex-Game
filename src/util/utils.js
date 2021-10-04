//this is used to genrate a random key
//use this whenever you don't have a unique id for a element while using .map

export class Utils{
    static makeid(length= 5) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const numbers = '0123456789'.split('');
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
        return numbers.includes(result.substring(0, 1)) ? '_' + result.substring(1, length + 1) : result;
    }
}
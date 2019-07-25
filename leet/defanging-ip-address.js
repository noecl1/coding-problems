/* Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * > The given address is a valid IPv4 address.
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 *
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 *
 * */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var arr=[]
    var index=0
    for (var i=0; i < address.length; i++) {            
        if (address[i] === '.') {
            arr.push("[",".","]")
        } else {
            arr.push(address[i])
        }
    }
    return arr.join("");
};

console.log(defangIPaddr("1.1.1.1"))

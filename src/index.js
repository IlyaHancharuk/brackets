module.exports = function check(str, bracketsConfig) {
  let openBrackets = []
    let pairBrackets = {}
    let stack = []
    
    for (let i = 0; i < bracketsConfig.length; i++) {
      openBrackets.push(bracketsConfig[i][0])
      pairBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0]
      }

    for (let i = 0; i < str.length; i++) {
        let curSymbol = str[i]

        if (openBrackets.includes(curSymbol)) {
          stack.push(curSymbol)
          console.log(stack)
        } else {
          if (stack.length === 0) {
            return false
          }
  
          let topElem = stack[stack.length - 1]
  
          if (pairBrackets[curSymbol] === topElem) {
            stack.pop()
          } else {
            return false;
          }
        }
      }
  
      return stack.length === 0;
}

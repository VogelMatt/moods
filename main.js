const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (let hour of hours) {
    if(hour >= 7) {
        happyHours.push(hour)
    }
    else{
        grumpyHours.push(hour)
    }
}
console.log(`I was grumpy on ${grumpyHours.length}. I was happy on ${happyHours.length}.`)
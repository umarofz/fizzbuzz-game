// FizzBuzz oyin

const number = prompt('Kiriting')

if (number % 3 === 0 && number % 5 === 0){
  alert('fizzbuzz')
} else if (number % 3 === 0) {
  alert('fizz')
} else if (number % 5 === 0) {
  alert('buzz')
}

// Salomlashadigan robot

const name = prompt('Ismingiz')

if (name && !Number(name)) {
  alert (`Assalomu alaykum ${name}`)
} else {
  alert('Ismingizni kiriting!!!')
}
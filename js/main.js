const number = prompt('Kiriting')

if (number % 3 === 0 && number % 5 === 0){
  alert('fizzbuzz')
} else if (number % 3 === 0) {
  alert('fizz')
} else if (number % 5 === 0) {
  alert('buzz')
}
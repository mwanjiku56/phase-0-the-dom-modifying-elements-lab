const main = document.getElementById('main')
main.remove('main')
const newHeader = document.createElement('h1')
//document.body.append(newHeader)
newHeader.setAttribute('id', 'victory')
//newHeader = document.querySelector('h1#victory')
//console.log(newHeader)
newHeader.innerHTML = 'YOUR-NAME is the champion'
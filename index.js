const main = document.getElementById('main')
main.remove('main')
const newHeader = document.createElement('h1')

newHeader.setAttribute('id', 'victory')

newHeader.innerHTML = 'YOUR-NAME is the champion'
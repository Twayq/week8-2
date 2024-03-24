const btnPrint = document.querySelector('button');
const resultList = document.querySelector('#resultPrints');
const message = 'I am awesome!'

btnPrint.addEventListener('click', () => {

    for(let i = 0; i < 10; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = `${i + 1}. ${message}`;
        resultList.appendChild(newLi);
    }
});

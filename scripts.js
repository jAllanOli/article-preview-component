const btn = document.getElementById('share-btn')
const baloon = document.querySelector('#share-balon')
const arrow = document.getElementById('arrow')

function changeContent() {
    if (baloon.classList.contains('visible')) {
        btn.classList.remove('selected-state')
        arrow.removeAttribute('fill')
        arrow.setAttribute('fill', '#6E8098')
        baloon.classList.remove('visible')
    } else {
        btn.classList.add('selected-state')
        arrow.removeAttribute('fill')
        arrow.setAttribute('fill', '#fff')
        baloon.classList.add('visible')
    }
}


btn.onclick = function () { changeContent() }
'use strict'

const btn = document.querySelector('button')
const tbl = document.querySelector('table')
const maara = document.querySelector('#rivimaara')

let arvottu = 0

maara.innerHTML = arvottu

btn.addEventListener('click', () => {
    const row = tbl.insertRow()

    for (let i = 0; i < 7; i++) {
        let numero = Math.floor(Math.random() * 10)

        let col = row.insertCell(i)
        col.innerHTML = numero
    }

    arvottu++
    maara.innerHTML = arvottu

})
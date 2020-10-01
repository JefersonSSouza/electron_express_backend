const fs = require('fs');
const { resolve } = require('path')
window.$ = window.Jquery = require('jquery')

//function ro router pages on main div in the home page
async function changePage(page) {

    const url = resolve('./src/pages/' + page + '.html');
    var data = fs.readFileSync(url)
    document.getElementById("main").innerHTML = data;
}
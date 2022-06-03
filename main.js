console.log(document.getElementsByTagName('h1')[0].innerHTML = "New Text")

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change() {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'New Text'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    }
}
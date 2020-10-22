const content = document.querySelector('.code')

const button = document.querySelector('.copy')
button.addEventListener("click", copyCode)

function copyCode(){
    content.select()
    document.execCommand("Copy")
}

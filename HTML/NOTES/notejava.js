var ul = document.getElementById("list-container")
function update() {
    var textinput = document.getElementById("textinput")
    var listelmn = document.createElement("li")
    listelmn.innerHTML = textinput.value + "<button onclick='deletion(event)'>DELETE</button>"
    ul.append(listelmn)
    console.log(listelmn)
}
function deletion(event) {
    event.target.parentElement.remove()
}
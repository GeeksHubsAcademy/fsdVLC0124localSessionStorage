
// const persona = JSON.parse(sessionStorage.getItem("amigo"))
let buah = sessionStorage.getItem("amic")

console.log(buah, "asfasdf")
document.getElementById("saludo").innerHTML = `Hola ${buah !== "undefined" ? true : false}`
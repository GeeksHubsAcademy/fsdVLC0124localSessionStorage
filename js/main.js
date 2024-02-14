
const nombre = document.getElementById("name")
let valor;

nombre.addEventListener("input", (e)=> {
    valor = e.target.value
})

const guardar = () => {

    //guardo en SessionStorage una variable
    // sessionStorage.setItem("nombre", valor)
    sessionStorage.setItem("amic", valor)
    console.log(valor,"asfasfdasdf")


    //guardo en SessionStorage un objeto
    // let amic = {
    //     nombre: valor,
    //     fiabilidad: true,
    //     deudas: 0
    // }


    // sessionStorage.setItem("amigo", JSON.stringify(amic))

}
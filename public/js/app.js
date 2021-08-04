
console.log("client side js file is loaded")

fetch('http://puzzle.mead.io/puzzle').then((response)=>{

    response.json().then((data) =>{
        console.log(data)
    })

})
const weatherform=document.querySelector('form')
weatherform.addEventListener('submit',()=>{
    console.log('testing!')
})
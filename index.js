function AddTask(){
    var input=document.querySelector('.input')
    console.log(input.value)
    var element=document.getElementById('TaskCotainer')
    console.log(element)
    var newElement=document.createElement('div')
    newElement.setAttribute('id','ind-Task')
    newElement.innerHTML=`<p>${input.value}</p><button onclick="Delete(event)"> Delete</button>`
    element.append(newElement)
    
   
}
function Delete(event){
    event.target.parentElement.remove()


}
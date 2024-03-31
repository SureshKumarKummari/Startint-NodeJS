
function submitHandle(e){
    e.preventDefault();
    let obj={
        username: e.target.username.value,
        phone: e.target.phone.value,
        email: e.target.email.value
    }
    //console.log(obj);
  axios.post("http://localhost:3000/add-product",obj).then((result)=>{
        console.log(result);
        display(result.data);
    document.getElementById("username").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    }).catch((err)=>{
            console.log(err);
    });

}

function display(result){
    let ul=document.querySelector('.ul');
    let li=document.createElement('li');
    //console.log(result.id);
    li.setAttribute('name',result.id);
    console.log(result);
    let data=result.username+" - "+result.email+" - "+result.phone+" - ";
    let dat=document.createTextNode(data);
    li.appendChild(dat);
    li.setAttribute('name',result.id);

    let btn=document.createElement('button');
    let btntext=document.createTextNode('DELETE');
    btn.appendChild(btntext);
    btn.addEventListener('click',(e)=>{
      handleevent1(e);
    });

    let btn2=document.createElement('button');
    let btntext2=document.createTextNode('EDIT');
    btn2.appendChild(btntext2);
    btn2.addEventListener('click',(e)=>{
      handleevent1(e);
    });

    li.appendChild(btn);
    li.appendChild(btn2);
    ul.appendChild(li);
}

function handleevent1(e) {
  e.preventDefault();
  let id = e.target.parentNode.getAttribute('name');
  let p = e.target.parentNode;
  let ename=e.target.textContent;
  let a=p.textContent.split(" - ");
  let url = `http://localhost:3000/deleteproduct/${id}`;
  axios.delete(url)
    .then((result) => {
        if(ename==="DELETE"){
      console.log("Data deleted successfully");
        }else{
            document.getElementById("username").value=a[0];
            document.getElementById("email").value=a[1];
            document.getElementById("phone").value=a[2];
        }
      p.remove();
  
    })
    .catch((error) => {
      console.log("Error deleting data:", error);
    });
}



window.addEventListener('DOMContentLoaded',(e)=>{
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((response)=>{
    for(let i=0;i<response.data.length;i++){
    display(response.data[i]);
      }
  }).catch((error)=>{
    console.log(error);
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', submitHandle);
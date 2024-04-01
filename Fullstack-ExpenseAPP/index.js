function handleFormSubmit(e){
e.preventDefault();
const obj={
    expense: e.target.expense.value,
    description: e.target.description.value,
    category: e.target.category.value
}
console.log(obj);
axios.post('http://localhost:3000/addExpense',obj).then((res)=>{
    e.target.expense.value="";
    e.target.description.value="";
    e.target.category.value="";    
    display(res.data);
}).catch((err)=>{
    console.log(err);
})

}

function display(res){
    let ul=document.querySelector('.ul');
    let li=document.createElement('li');
    let data=res.expense+" - "+res.category+" - "+res.description+" - ";
    let ins=document.createTextNode(data);
    li.setAttribute('name',res.id);
    li.appendChild(ins);

    let btn1=document.createElement('button');
    let btn1text=document.createTextNode("Edit Expense");
    btn1.appendChild(btn1text);
    btn1.addEventListener('click',function(e){
        eventhandling(e);
    })

  let btn2=document.createElement('button');
  let btn2text=document.createTextNode("Delete Expense");
  btn2.appendChild(btn2text);
  btn2.style.margin="10px";
  btn2.addEventListener('click',function(e){
    eventhandling(e);
  })

  li.appendChild(btn2);
  li.appendChild(btn1);
  ul.appendChild(li);
    
}

function eventhandling(e) {
  e.preventDefault();
  let p=e.target.parentNode;
  let ife = e.target.textContent.trim();
  let id=p.getAttribute('name');
  axios.delete(`http://localhost:3000/deleteExpense/${id}`).then((res)=>{
     if (ife !== "Delete Expense") {
        document.getElementById("expense").value = res.data.expense;
        document.getElementById("category").value = res.data.category;
        document.getElementById("description").value = res.data.description;
    }
    p.remove();
  }).catch((err)=>{
    console.log(err);
  })
 
}

window.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    axios.get(`http://localhost:3000/getExpenses`).then((res)=>{
    for(let i=0;i<res.data.length;i++){   
    display(res.data[i]);
    }
}).catch((err)=>{
    console.log(err);
})
})

const form=document.querySelector('form');

form.addEventListener('submit',handleFormSubmit);
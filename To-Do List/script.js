let content = document.createElement("div");
content.id = "content";

Object.assign(document.body.style,{
 margin:"0",
 fontFamily:"Arial, sans-serif",
 height:"100vh",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 background:"linear-gradient(135deg,#667eea,#764ba2)"
})

document.body.appendChild(content);

let aman = document.createElement("div");

Object.assign(aman.style,{
 background:"rgba(255, 255, 255, 0.93)",
 backdropFilter:"blur(10px)",
 padding:"30px",
 width:"400px",
 borderRadius:"15px",
 textAlign:"center",
 boxShadow:"0 8px 25px rgba(0,0,0,0.3)",
 color:"white",
 overflowY:"auto"
})

content.appendChild(aman);

let h1 = document.createElement("h1");
h1.innerHTML = "To-Do List";
h1.style.color = "#c137dd"
aman.appendChild(h1)

let input = document.createElement("input");
input.placeholder="Enter The Task..."

Object.assign(input.style,{
 marginTop:"20px",
 padding:"6px",
 border:"none",
 width:"50%",
 margin:"5px",
 borderRadius:"5px",
 border:"2px solid rgba(173, 64, 177, 0.69)",
  background:"rgba(255, 255, 255, 0.97)",
 outline:"none",
 color:"black"
})

let add = document.createElement("button");
add.innerHTML  = "Add"

Object.assign(add.style,{
 padding:"7px",
 width:"60px",
 border:"none",
 borderRadius:"5px",
 cursor:"pointer",
 backgroundColor:"rgba(173, 95, 245, 0.88)",
 fontsize:"2px"
})

add.onmouseover = () => {
  add.style.transform = "scale(1.1)"
}

add.onmouseout = () => {
  add.style.transform = "scale(1)"
}

aman.appendChild(input)
aman.appendChild(add)

let list = document.createElement("ul")

Object.assign(list.style,{
 listStyle:"none",
 padding:"0",
 marginTop:"20px"
})

aman.appendChild(list)

add.addEventListener("click" , function(){

 if (input.value.trim() === "") {
   alert("Please Enter Task");
   return;
 }

 let li = document.createElement("li");

 Object.assign(li.style,{

  background: "linear-gradient(45deg, #2e312db7, #6f00ffbd)",
  padding:"5px",
   margin:"8px 0",
   borderRadius:"10px",
   display:"flex",
   justifyContent:"space-between",
   alignItems:"center"
 })

 let taskText = document.createElement("span");
 taskText.innerText = input.value;

 let del = document.createElement("button");
 del.innerText = "🗑️"

 Object.assign(del.style,{
   border:"none",
   background:"red",
   color:"white",
   borderRadius:"5px",
   cursor:"pointer",
   padding:"5px"
 })

 del.addEventListener("click",function(){
   li.remove()
 })

   del.onmouseover = () => {
    del.style.transform = "scale(1.1)";
  };

  del.onmouseout = () => {
    del.style.transform = "scale(1)";
  };

 taskText.addEventListener("click",function(){
   taskText.style.textDecoration="line-through"
 })

 li.appendChild(taskText)
 li.appendChild(del)

 list.appendChild(li)

 input.value = ""
})
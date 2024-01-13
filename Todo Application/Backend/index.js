//Object destructuring 
import express from "express";
import  {todo} from  './db.js';
import  {createTodo,updateTodo}from "./types.js";
import cors from "cors";


const port =3000;
const app = express();

//enables us to use data sent over by cliet
app.use(express.json());
//lets u comminicate with other urls 
app.use(cors(
    {
        origin:"http://localhost:5173/"
    }
));

// to handle cors error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// body{
//     title:"",
//     descrription:""
// }

app.post("/todo",async (req,res)=>{
//step1 -> fetch the data object 
//step 2-> safeParse the data into schema 

   
   console.log(req.body);
   const parsePayload = createTodo.safeParse(req.body);
   
   if(!parsePayload.success)
   {
    res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
   }
const newTodo = await new todo({
    title:req.body.title,
    description:req.body.description,
    completed:false,
})
newTodo.save();

res.json({
    ms:"Todo Created"
})

})

//need to  await todo.find else it will return a promise
app.get("/todos", async (req,res)=>{

const getPayload = await todo.find({});
getPayload.forEach(element=>{
    console.log(element)
})

res.json({
    getPayload
})
})

app.put("/completed",async (req,res)=>{

    const updatedPayload = req.body;
    const parsePayload=updateTodo.safeParse(updatedPayload);
    if(!parsePayload.success)
    {
    res.send(411).json({
            msg:"You sent the wrong inputs",
        })
        return ;
    }

    await todo.update({
_id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo Marked as Completed"
    })
})


app.listen(port,()=>{
    console.log(`Backend server is running at ${port}`);
})

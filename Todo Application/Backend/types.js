import  zod from  "zod";

//Returns Schema 

// {
//     title:string ,
//     description:string 
// }
// {
//     id:string
// }

export const createTodo = zod.object({
  title:zod.string(),
  description:zod.string(),  
})

export const updateTodo = zod.object({
    id:zod.string(),
})


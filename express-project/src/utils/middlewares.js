export const loginMiddleware  =  (req,res,next)=>{
 // response.send({message:"THIS IS MIDDLE WARE 1"})
 console.log("LOGIN .... ")
  next();
}


export const sessionMiddleware  =  (req,res,next)=>{
 // response.send({message:"THIS IS SESSION MIDDLEWARE})
 console.log("THIS IS SESSION MIDDLEWARE .... ")
  next();
}

// export 

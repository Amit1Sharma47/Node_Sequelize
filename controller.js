const Book =require('./model');
exports.postBook=(req,res,next)=>{
   const  title=req.title
    const desc=req.desc
    Book.create({
        title,desc
    }).then(res=>console.log(res)).catch((err)=>console.log(err))

}
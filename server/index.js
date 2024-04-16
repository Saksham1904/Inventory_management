const express=require("express")
const app=express()
const cors=require("cors")
const route=require("./routes/route")
const dotenv=require("dotenv")



dotenv.config()

app.use(express.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use(route)


const PORT=process.env.PORT || 3000;


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"server is running"
    })
})


app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING UP.... ");
})
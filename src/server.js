

const app = require("./index")


const connect=require("./configs/db")




app.listen("2000",async ()=>{

    await connect()
    console.log("listeing to a port")


})



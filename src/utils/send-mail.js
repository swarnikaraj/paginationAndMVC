const transporter=require("../configs/nodemailer")


   
 
   



   module.exports=(from,to ,subject ,text,html)=>{
    


      const message = {
        from,
        to,
        subject,
        text,
        html,
      };

     transporter.sendMail(message)


  

    }
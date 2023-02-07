import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'houst.evan49@gmail.com',
    pass: 'nvmelnjvpbrtotne'
  }
});

transporter.verify(function (error, success) {

  if (error) throw error;

  console.log('Bağlantı başarıyla sağlandı');

});


const mailSend =(body)=> {
  return new Promise((resolve, reject) => {
    if (!body.mail) 
      return reject({error:true,message:"Mail Boş Olamaz"})

    let bilgiler = {
      from: 'Evan Houston<houst.evan49@gmail.com>',
      subject: 'Bookkeeping Services',
      to:`${body.mail}`,
      text: ` 
      ${body.teamCheck ? body.isim+' team':'Dear '+body.isim} 
      I hope this email finds you well.
      My name is Evan Houston
      I was wondering if you’re using any bookkeeping services.
      If you do, there’s a chance that we can save you up to 50% in bookkeeping costs.
      Please let me know if you’re interested in hearing more.
      
      Thank you
      Evan Houston
      `
    };

    transporter.sendMail(bilgiler, function (error, info) {
      resolve( {info:info.response,message:"İşlem Başarılı Mail Gönderildi",mailler:{...bilgiler,body}})
      reject(error)
    });
  })
  
}




export default mailSend





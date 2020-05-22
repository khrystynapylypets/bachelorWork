import nodemailer from 'nodemailer';

export const sendEmail = (emails, emailData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'document.flow.acs@gmail.com',
      pass: '456789qweAsd'
    }
  });

  const { title, description, date, time, place } = emailData;

  let newDate = new Date(date);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(newDate);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);

  newDate = `${day}-${month}-${year}`;

  console.log(emails);
  const mailOptions = {
    from: 'document.flow.acs@gmail.com',
    to: emails.toString(),
    subject: 'Оголошення',
    html: `<h1>${title}</h1>
           <p><i>Час проведення:</i> ${newDate}, ${time}</p>
           <p><i>Місце проведення:</i> ${place}</p>
           <p><i>Опис:</i> ${description}</p>`

  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
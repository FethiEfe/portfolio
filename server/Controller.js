const bcrypt = require("bcryptjs")
const nodemailer = require("nodemailer")
main = async (req, res) => {
    console.log("hit")
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
     
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD // generated ethereal password
        }
    });
    let info = await transporter.sendMail({
        from: req.body.email, // sender address
        to: "f.akcay1@windowslive.com", // list of receivers
        // subject: req.body.subject, // Subject line
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`// plain text body
        // html: req.body.message // html body
    });
    res.status(200).json("ok")
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {
main
}
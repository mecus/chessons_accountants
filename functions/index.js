const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

const serviceAccount = require('./firebase-adminsdk.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chesson-b9447.firebaseio.com"
});
const sgMail = require('@sendgrid/mail');
const emailTo = "emeka@miscotech.co.uk";
const emailFrom = "design@miscotech.co.uk";
sgMail.setApiKey(functions.config().sengrid.api);

exports.phoneMeBack = functions.https.onRequest((req, res) => {
    let callb = {phone: req.query.phone, name: req.query.name};
    return cors(req, res, function(){
        return admin.database().ref("/callBacks").push(callb)
        .then(function(snapshot){
            const msg = {
                to: emailTo,
                from: emailFrom,
                subject: 'Call Back Request',
                html: `
                <strong>You need to call this customer back ASAP</strong>
                Name: ${callb.name},
                Telephone: ${callb.phone} .
                `
            }
            // sgMail.send(msg).then((reslt)=>{
            //     res.status(200).json({status: "Your messsage was sent successfully.", result: reslt});
            // }).catch((err)=> {
            //     console.log(err);
            //     res.status(404).json({status: "Your messsage failed to send.", Error: err});
            // })
            res.status(200).json({status: "Your messsage was sent successfully."});
            // res.redirect(303, snapshot.ref.toString());
        }).catch(function(err){console.log(err)});
    });
});

exports.userContact = functions.https.onRequest((req, res)=>{
    const contact = {
        name: req.query.name || null,
        email: req.query.email || null,
        messsage: req.query.messsage || null
    }
    return cors(req, res, function(){
        return admin.database().ref("/contacts").push(contact)
        .then(function(snapshot){
            res.status(200).json({status: "Contact saved"});
        })
        .catch(function(err){console.log(err)});
    });
});

exports.freeConsultation = functions.https.onRequest((req, res)=>{
    const consult = {
        name: req.query.name || "Me",
        email: req.query.email || "Email",
        phone: req.query.phone || "Phone",
        company: req.query.company || "Company",
        messsage: req.query.messsage || "Message"
    }
    return cors(req, res, function(){
        return admin.database().ref("/consultations").push(consult)
        .then(function(snapshot) {
            res.status(200).json({status: "Consultation saved"});
        })
        .catch(function(err){console.log(err)});
    });
});


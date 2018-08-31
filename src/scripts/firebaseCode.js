// Using fetch api to make an http request to the mail server
var basedEmail = "info@chessonsaccountants.com";
function httpPostFetch(data) {
    let url = "https://miscotech-mail-app.herokuapp.com/mail";
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
    }).then(res => res.json());
}

function createCallBack(data){
    startProgress();
    let body = {
        to: basedEmail,
        subject: "Call Back Request",
        html: `
        <strong>You need to call this customer back ASAP</strong>\n
        Name: ${data.name}\n
        Telephone: ${data.phone}\n
        `,
        text: `
        You need to call this customer back ASAP
        Name: ${data.name},
        Telephone: ${data.phone} .
        `
    }
    let resText = {
        type: "callback",
        head: "Thanks for submitting your number",
        msg: "One of our team will call you shortly"
    }
    httpPostFetch(body)
    .then(function(response){
        successRespondStatus(resText)
    })
    .catch(function(err){
        failureRespondStatus();
    });
}

function createContact(contact){
    startProgress();
    let body = {
        to: basedEmail,
        subject: "New Contact Submited",
        html: `
        <strong>You just got a new contact from your website</strong>..\n
        <p><strong>Name:</strong> ${contact.name} </p>\n
        <p><strong>Email:</strong> ${contact.email} </p>\n
        <p><strong>Message:</strong> ${contact.message} </p>\n
        `
    }
    let resText = {
        type: "contact",
        head: "Thanks for contacting us",
        msg: "We will get in touch with you shortly"
    }

    httpPostFetch(body)
    .then(function(resp){
        successRespondStatus(resText);
    })
    .catch(function(err){
        failureRespondStatus();
    });
}

function createConsultation(data){
    startProgress();
    let body = {
        to: basedEmail,
        subject: "Consultation Request",
        html: `
        <strong>A customer is requesting a consultation from your website</strong>..\n
        <p><strong>Name:</strong> ${data.name} </p>\n
        <p><strong>Company:</strong> ${data.company} </p>\n
        <p><strong>Email:</strong> ${data.email} </p>\n
        <p><strong>Telephone:</strong> ${data.phone} </p>\n
        <p><strong>Message:</strong> ${data.message} </p>\n
        `
    }
    let resText = {
        type: "consultation",
        head: "Thanks for submitting your details",
        msg: "We will get in touch with you shortly"
    }
    httpPostFetch(body)
    .then(function (resp) {
        successRespondStatus(resText);
    })
    .catch(function (err) {
        failureRespondStatus();
    });  
}

function successRespondStatus(code){
    endProgress();
    let resDiv = document.getElementById('respond');
    switch(code.type){
        case "callback":
            resDiv.innerHTML = `
            <div class="msg">
                <i onclick="closeWindows()" class="material-icons">close</i>
                <h1> ${code.head} </h1>
                <p> ${code.msg} </p>
            </div>
            `
            resDiv.style.display = "block";
            break;
        case "contact":
            resDiv.innerHTML = `
            <div class="msg">
                <i onclick="closeWindows()" class="material-icons">close</i>
                <h1> ${code.head} </h1>
                <p> ${code.msg} </p>
            </div>
            `
            resDiv.style.display = "block";
            break;
        case "consultation":
            resDiv.innerHTML = `
            <div class="msg">
                <i onclick="closeWindows()" class="material-icons">close</i>
                <h1> ${code.head} </h1>
                <p> ${code.msg} </p>
            </div>
            `
            resDiv.style.display = "block";
            break;
    }
}
function failureRespondStatus(){
    endProgress();
    let resDiv = document.getElementById('respond');
    resDiv.innerHTML = `
    <div class="msg">
        <i onclick="closeWindows()" class="material-icons">close</i>
        <h1> Sorry! your message failed</h1>
        <p>Please check your input and try again..</p>
    </div>
    `
    resDiv.style.display = "block";
}
function closeWindows(){
    let resDiv = document.getElementById('respond');
    resDiv.style.display = "none";
    window.location.reload();
}

let timeOut;
function startProgress(){
    let progress = document.getElementById('progress');
    let spin = document.querySelector('.spin');
    progress.style.display = "block";
    let count = 0;
    timeOut = setInterval(function(){
        spin.style.transform = "rotate" + "(" + count + "deg)";
        count += 5;
        if(count === 360){
            count = 0;
        }
        
    }, 10);
}
function endProgress(){
    clearInterval(timeOut);
    let progress = document.getElementById('progress');
    progress.style.display = "none";

}
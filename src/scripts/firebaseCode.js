function createXhrCorsRequest(method, url){
    let xhr = new XMLHttpRequest();
    if("withCredentials" in xhr){
        xhr.open(method, url, true);
    }else if(typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }else{
        xhr = null;
    }
    return xhr;
}

function createCallBack(data){
    startProgress();
    let url = `https://us-central1-chesson-b9447.cloudfunctions.net/phoneMeBack?name=${data.name}&phone=${data.phone}`;
    const xmlHttp = createXhrCorsRequest("GET", url);
    if(!xmlHttp){
        alert("Your browser don't support xhr");
        return;
    }
    xmlHttp.onload = function(){
        // let resText = xmlHttp.responseText;
        let resText = {
            type: "callback",
            head: "Thanks for submitting your number",
            msg: "One of our team will call you shortly"
        }
        successRespondStatus(resText);
    }
    xmlHttp.onerror = function() {
        failureRespondStatus();
      };
    xmlHttp.send();
}

function createContact(contact){
    startProgress();
    const url  = `https://us-central1-chesson-b9447.cloudfunctions.net/userContact?name=${contact.name}&email=${contact.email}&message=${contact.message}`;
    const xmlHttp = createXhrCorsRequest("GET", url);
    if(!xmlHttp){
        alert("Your Browser don't support XHR!!");
        return;
    }
    xmlHttp.onload = function() {
        let resp = xmlHttp.responseText;
        let resText = {
            type: "contact",
            head: "Thanks for contacting us",
            msg: "We will get in touch with you shortly"
        }
        successRespondStatus(resText);
      };
    xmlHttp.onerror = function(){
        failureRespondStatus();
    }
    xmlHttp.send();
}

function createConsultation(data){
    startProgress();
    const url  = `https://us-central1-chesson-b9447.cloudfunctions.net/freeConsultation?name=${data.name}&email=${data.email}&message=${data.message}&company=${data.company}&phone=${data.phone}`;

    const xmlHttp = createXhrCorsRequest("GET", url);
    if(!xmlHttp){
        alert("Your Browser don't support XHR!!");
        return;
    }
    xmlHttp.onload = function() {
        let resp = xmlHttp.responseText;
        let resText = {
            type: "consultation",
            head: "Thanks for submitting your details",
            msg: "We will get in touch with you shortly"
        }
        successRespondStatus(resText);
      };
    xmlHttp.onerror = function(){
        failureRespondStatus();
    }
    xmlHttp.send();
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
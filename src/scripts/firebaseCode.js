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
    let url = `https://us-central1-chesson-b9447.cloudfunctions.net/phoneMeBack?name=${data.name}&phone=${data.phone}`;
    const xmlHttp = createXhrCorsRequest("GET", url);
    if(!xmlHttp){
        alert("Your browser don't support xhr");
        return;
    }
    xmlHttp.onload = function(){
        let resText = xmlHttp.responseText;
        successRespondStatus(resText);
    }
    xmlHttp.onerror = function() {
        failureRespondStatus();
      };
    xmlHttp.send();
}

function createContact(contact){
    const url  = `https://us-central1-chesson-b9447.cloudfunctions.net/userContact?name=${contact.name}&email=${contact.email}&message=${contact.message}`;
    const xmlHttp = createXhrCorsRequest("GET", url);
    if(!xmlHttp){
        alert("Your Browser don't support XHR!!");
        return;
    }
    xmlHttp.onload = function() {
        let resp = xmlHttp.responseText;
        successRespondStatus(resp);
      };
    xmlHttp.onerror = function(){
        failureRespondStatus();
    }
    xmlHttp.send();
}

function createConsultation(data){
    const url  = `https://us-central1-chesson-b9447.cloudfunctions.net/freeConsultation?name=${data.name}&email=${data.email}&message=${data.message}&company=${data.company}&phone=${data.phone}`;

    const xmlHttp = createXhrCorsRequest("GET", url);
    if(!xmlHttp){
        alert("Your Browser don't support XHR!!");
        return;
    }
    xmlHttp.onload = function() {
        let resp = xmlHttp.responseText;
        successRespondStatus(resp);
      };
    xmlHttp.onerror = function(){
        failureRespondStatus();
    }
    xmlHttp.send();
}

function successRespondStatus(code){
    console.log("XHR RESP:", code);
    let resDiv = document.getElementById('respond');
    resDiv.innerHTML = `
    <div class="msg">
        <i onclick="closeWindows()" class="material-icons">close</i>
        <h1> Thanks for contacting us!!</h1>
        <p>Your message was send successfully..</p>
    </div>
    `
    resDiv.style.display = "block";
}
function failureRespondStatus(){
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
}
let phoneRegx = /^0\d{10}/
window.addEventListener('load', function(e){
  let about = document.getElementById('nabout');
  let service = document.getElementById('nservice');
  let contact = document.getElementById('ncontact');
  let color = "#d02956";
  let textC = "#1D3557";
  switch(e.target.location.pathname){
    case "/about.html":
      about.style.backgroundColor = color;
      about.style.color = textC;
      about.style.transition = "1s";
      break;
    case "/services.html":
      service.style.backgroundColor = color;
      service.style.color = textC;
      service.style.transition = "1s";
      break;
    case "/contact.html":
      contact.style.backgroundColor = color;
      contact.style.color = textC;
      contact.style.transition = "1s";
      break;
  }
  // Other Animation here
  // let tit = document.getElementById('welTitle');
  let h1 = document.getElementsByTagName('h1')[0];
  console.log(h1);
  if(h1){
    setTimeout(function(){
      h1.style.transform = "scale(1)";
      // h1.style.transition = "0.3s";
      // h1.style.webkitTransition = "0.3s";
      h1.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    }, 200);
  }
  
  // if(tit){
  //   setTimeout(function(){
  //     tit.style.transform = "scale(1)";
  //     tit.style.transition = "0.5s";
  //     tit.style.webkitTransition = "0.5s";
  //     tit.style.transitionTimingFunction = "cubic-bezier(0.42,0,0.58,1)";
  //   }, 200);
  // }
});

(function RenderNavigation(){
  let nav = document.getElementById('navigation');
  if(nav){
    nav.innerHTML = `
    <div class="menu-wrapper">
        <div class="headmenu">
            <span>
                <a attr="brand" href="./index.html">Chessons</a>
                </span>
                <span class="desktop-menu">
                    <a id="nabout" href="./about.html">About Us</a>
                    <a id="nservice" href="./services.html">Services</a>
                    <a id="ncontact" href="./contact.html">Contact</a>
                </span>
                <span class="mob-menu">
                <i onclick="openMenu()" class="fas fa-bars"></i>
            </span>
        </div>
    </div>
    `
  }
})();
var setInterV;
function closeMenu(){
    var menu = document.getElementById('mob-menu');
    var mi2 = document.getElementsByClassName('men-it');
    for(var i = 0; i < mi2.length; i++){
      mi2[i].style.marginRight = "-380px";
    }
    let sbrand = document.getElementById('shapBrand');
    sbrand.style.transform = "scale(0)";
    clearInterval(setInterV);
    menu.style.display = "none";
  }
function openMenu(){
  console.log(window.navigator.vendor);
    var menu = document.getElementById('mob-menu');
    var mi = document.getElementsByClassName('men-it');
    menu.style.display = "block";
    var n = 0;
    setInterV = setInterval(showM, 150);
    function showM(){
      if(n < mi.length){
        mi[n].style.marginRight = "0px";
        // mi[n].style.transition = "0.3s";
        mi[n].style.transitionTimingFunction = "ease-in-out";
        n += 1;
      }
      
    }
   setTimeout(function(){
    let sbrand = document.getElementById('shapBrand');
    sbrand.style.transform = "scale(1)";
    sbrand.style.transition = "0.5s";
   }, 500);

}

function aboutUs(sel){
  let m2 = document.getElementById("menu2");
  let m1 = document.getElementById("menu1");
  let about = document.getElementById("about");
  let team = document.getElementById("team");
  if(sel == "about"){
    m1.style.backgroundColor = "#ffffff";
    m1.style.transition = "width .5";
    m2.style.backgroundColor = "transparent";
    about.style.display = "block";
    team.style.display = "none";
  }
  if(sel == "team"){
    m2.style.backgroundColor = "#ffffff";
    m2.style.transition = "width .5s";
    m1.style.backgroundColor = "transparent";
    about.style.display = "none";
    team.style.display = "block";
  }
}

function readMore(name){
  
  switch(name){
    case "andy":
      let andy = document.getElementById("readMoreAndy");
      andy.style.transform = "scale(1)";
      andy.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      break
    case "chidi":
      let chidi = document.getElementById("readMoreChidi");
      chidi.style.transform = "scale(1)";
      chidi.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      break
    case "lisa":
      let lisa = document.getElementById("readMoreLisa");
      lisa.style.transform = "scale(1)";
      lisa.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      break
    case "chai":
      let chai = document.getElementById("readMoreChai");
      chai.style.transform = "scale(1)";
      chai.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      break
    case "brown":
      let brown = document.getElementById("readMoreBrown");
      brown.style.transform = "scale(1)";
      brown.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      break
  }
}
function closeWindow(name){
  switch(name){
    case "andy":
      let andy = document.getElementById("readMoreAndy");
      andy.style.transform = "scale(0)";
      andy.style.transition = ".2s";
      break
    case "chidi":
      let chidi = document.getElementById("readMoreChidi");
      chidi.style.transform = "scale(0)";
      chidi.style.transition = ".2s";
      break
    case "lisa":
      let lisa = document.getElementById("readMoreLisa");
      lisa.style.transform = "scale(0)";
      lisa.style.transition = ".2s";
      break
    case "chai":
      let chai = document.getElementById("readMoreChai");
      chai.style.transform = "scale(0)";
      chai.style.transition = ".2s";
      break
    case "brown":
      let brown = document.getElementById("readMoreBrown");
      brown.style.transform = "scale(0)";
      brown.style.transition = ".2s";
      break
  }

}
(function RenderFooter(){
  let foot = document.getElementById('footer');
  if (foot) {
  foot.innerHTML = `
  <div class="footer">
    <img src="assets/images/BKD_Accounting_Firm_Wichita_Office_Reception2.jpg" alt="">
    <div class="company-info">
      <div class="about-us">
        <h1>Who we are and what makes us different</h1>
          <p>
              The firm was established in 1992 as an Accountancy practice and has witnessed steady and
              progressive growth over the years. 
          </p>
          <p>
              We have 20 years of experience and expertise in helping
              a wide variety of clients from a broad range of sectors to meet their immediate, short and
              long term objectives.
          </p>
          <a href="./about.html">read more</a>
        </div>
        <div class="contacts">
          <h1>Where we live</h1>
          <h2>1 St Mark Street</h2>
          <h2>E1 8DA</h2>
          <h2>London</h2>
          <p attr="tel"><strong>Tel:</strong> 0207 26411942, 07966001101</p>
          <p><strong>Fax:</strong> 0207 377 5721</p>
          <p><strong>Email:</strong> info@chessonsaccountants.com</p>
        </div>
    </div>
    <div class="socials">
        <a href="https://twitter.com/ChessonsUK">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/chessons/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/chessons.accountants">
          <i class="fab fa-facebook-f"></i>
        </a>
        <i class="fab fa-instagram"></i>
    </div>
    </div>
    <div class="slim-footer">
    <span>
        <i class="far fa-copyright"></i>
        <p>Copyright 2018 Chessons Allright Reserved</p>
    </span>
    </div>

  `
  }
})();
(function RenderTestimony(){
  let testimony = document.getElementById('textimony');
  if (testimony) {
  testimony.innerHTML = `
  <div class="testimony">
    <div class="testimony-wrapper">
      <h1>Testimony</h1>
      <div class="testimony-loop-container">
        <span>
            <i onclick="controlLoop(-1)" attr="angle" class="material-icons">keyboard_arrow_left</i>
            <!-- <i attr="angle" class="fas fa-angle-left"></i> -->
        </span>
        <span class="testimony-field">
          <div class="testifier">
            <i attr="user" class="fas fa-user-circle"></i>
            <small>
              First couple of years into our new business, we struggle to manage our accounting task
              until we found Chessons Accountants. since then they are resposible for all our accounting task without complain.
            </small>
            <h2>Alice Jones</h2>
            <p>Manager CluodFond</p>
          </div>
        </span>
        <span>
            <i onclick="controlLoop(1)" attr="angle" class="material-icons">keyboard_arrow_right</i>
            <!-- <i attr="angle" class="fas fa-angle-right"></i> -->
        </span>
      </div>
    </div>
  </div>
  
  `
  }
})();
var slideIndex = 1;
showDivs(slideIndex);

function controlLoop(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testifier");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  x[slideIndex-1].style.display = "flex";
}

let togg1, togg2, togg3, togg4, togg5, togg6,
togg7, togg8, togg9, togg10, togg11 = false;

function getServiceDetails(task) { 
  let detail1 = document.getElementById('service-details1');
  let detail2 = document.getElementById('service-details2');
  let detail3 = document.getElementById('service-details3');

  let detail4 = document.getElementById('service-details4');
  let detail5 = document.getElementById('service-details5');
  let detail6 = document.getElementById('service-details6');

  let detail7 = document.getElementById('service-details7');
  let detail8 = document.getElementById('service-details8');
  let detail9 = document.getElementById('service-details9');

  let detail10 = document.getElementById('service-details10');
  let detail11 = document.getElementById('service-details11');

  
  switch(task){
    case "t1":
      if(!togg1){
        detail1.style.fontSize = "0.8em";
        detail1.style.transition = "0.2s";
        detail1.style.opacity = "0.8";
        togg1 = true;
      }else{
        detail1.style.fontSize = "0em";
        togg1 = false;
      }
      break
    case "t2":
      if(!togg2){
        detail2.style.fontSize = "0.8em";
        detail2.style.transition = "0.2s";
        detail2.style.opacity = "0.8";
        togg2 = true;
      }else{
        detail2.style.fontSize = "0em";
        togg2 = false;
      }
      break
    case "t3":
      if(!togg3){
        detail3.style.fontSize = "0.8em";
        detail3.style.transition = "0.2s";
        detail3.style.opacity = "0.8";
        togg3 = true;
      }else{
        detail3.style.fontSize = "0em";
        togg3 = false;
      }
      break

      case "t4":
      if(!togg4){
        detail4.style.fontSize = "0.8em";
        detail4.style.transition = "0.2s";
        detail4.style.opacity = "0.8";
        togg4 = true;
      }else{
        detail4.style.fontSize = "0em";
        togg4 = false;
      }
      break
    case "t5":
      if(!togg5){
        detail5.style.fontSize = "0.8em";
        detail5.style.transition = "0.2s";
        detail5.style.opacity = "0.8";
        togg5 = true;
      }else{
        detail5.style.fontSize = "0em";
        togg5 = false;
      }
      break
    case "t6":
      if(!togg6){
        detail6.style.fontSize = "0.8em";
        detail6.style.transition = "0.2s";
        detail6.style.opacity = "0.8";
        togg6 = true;
      }else{
        detail6.style.fontSize = "0em";
        togg6 = false;
      }
      break

      case "t7":
      if(!togg7){
        detail7.style.fontSize = "0.8em";
        detail7.style.transition = "0.2s";
        detail7.style.opacity = "0.8";
        togg7 = true;
      }else{
        detail7.style.fontSize = "0em";
        togg7 = false;
      }
      break
    case "t8":
      if(!togg8){
        detail8.style.fontSize = "0.8em";
        detail8.style.transition = "0.2s";
        detail8.style.opacity = "0.8";
        togg8 = true;
      }else{
        detail8.style.fontSize = "0em";
        togg8 = false;
      }
      break
    case "t9":
      if(!togg9){
        detail9.style.fontSize = "0.8em";
        detail9.style.transition = "0.2s";
        detail9.style.opacity = "0.8";
        togg9 = true;
      }else{
        detail9.style.fontSize = "0em";
        togg9 = false;
      }
      break

      case "t10":
      if(!togg10){
        detail10.style.fontSize = "0.8em";
        detail10.style.transition = "0.2s";
        detail10.style.opacity = "0.8";
        togg10 = true;
      }else{
        detail10.style.fontSize = "0em";
        togg10 = false;
      }
      break
    case "t11":
      if(!togg11){
        detail11.style.fontSize = "0.8em";
        detail11.style.transition = "0.2s";
        detail11.style.opacity = "0.8";
        togg11 = true;
      }else{
        detail11.style.fontSize = "0em";
        togg11 = false;
      }
      break
  }
 }
 function requestRouting(url){
  return window.location.href = url.toString();
 }


(function checkInput(){
  let validation = false;
  let eForm = document.getElementById('cForm');
  let cemail = document.getElementById('cEmail');
  let cname = document.getElementById('cName');
  let ccompany = document.getElementById('cCompany');
  let cButton = document.getElementById('cButton');
  if(!eForm){
    return null;
  }
  eForm.addEventListener("keydown", function(e){
    // console.log(e.target.style.borderColor);
    switch(e.target.id){
      case "cEmail":
        if((e.target.value.length > 2 && e.target.value.length < 35) && e.target.value.includes('@')){
          console.log("Right Character input");
          cemail.style.borderColor = "green";
          cemail.style.color = "green";
          validation = true;
        }else{
          console.log("Low Character input");
          cemail.style.borderColor = "red";
          cemail.style.color = "red";
          validation = false;
        }
        break;
      case "cName":
        if(e.target.value.length < 5){
          console.log("Low Character input");
          cname.style.borderColor = "red";
          cname.style.color = "red";
          validation = false;
        }else{
          console.log("Right Character input");
          cname.style.borderColor = "green";
          cname.style.color = "green";
          validation = true;
        }
        break;
      case "cCompany":
        if(e.target.value.length < 2 || e.target.value.length > 35){
          console.log("Low Character input");
          ccompany.style.borderColor = "red";
          ccompany.style.color = "red";
          validation = false;
        }else{
          console.log("Right Character input");
          ccompany.style.borderColor = "green";
          ccompany.style.color = "green";
          validation = true;
        }
        break;
    }
    if(!validation){
     console.log(validation, ":Validation fails");
    }
  });
  
 if(cButton){
   cButton.addEventListener('click', function(e){
     e.preventDefault();
     let cForm = document.getElementById('cForm').elements;
     let reg = cForm[4].value.toString();
     let res = reg.replace(/\W/g, " ");
     let consult = {
       name: cForm[0].value,
       company: cForm[1].value,
       email: cForm[2].value,
       phone: cForm[3].value,
       message: cForm[4].value
     }
     if(!cForm[0].value){
      cname.style.borderColor = "red";
     }
     if(!cForm[1].value){
      ccompany.style.borderColor = "red";
     }
     if(!cForm[2].value){
      cemail.style.borderColor = "red";
     }
     if(validation){
      // console.log(consult);
      createConsultation(consult);
     }else{
      console.log("form is not valid");
     }
     
   });
 }
})();

(function contactSubmitForm(){
  const contactButton = document.getElementById('contactButton');
  if(!contactButton){
    return null;
  }
  const name = document.getElementById('nameCon');
  const email = document.getElementById('emailCon');
  const message = document.getElementById('messageCon');
 
  contactButton.addEventListener("click", function (e) {
    const data = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    if(!email.value){
      email.style.borderColor = "red";
      return;
    }
    email.style.borderColor = "lightgrey";
    console.log(data);
    createContact(data);
  });
})();

// Moved All Page Animations to a seperate file

(function callBackFormSubmit(){
  let callBack = document.getElementById('callBack');
  if(!callBack){
    return null;
  }
  callBack.addEventListener('click', function(e){
    e.preventDefault();
    let ccallName = document.getElementById('ccallName');
    let ccallPhone = document.getElementById('ccallPhone');
    let errMsg = document.getElementById('errMsg');
    let data = {
      name: ccallName.value,
      phone: ccallPhone.value
    }
    
    let ph = ccallPhone.value.toString();
    if(!ccallPhone.value){
      ccallPhone.style.borderColor = "red";
      errMsg.style.padding = "10px";
      errMsg.style.color = "red";
      errMsg.innerText = "Phone number must be present!!";
      errMsg.style.transition = "0.4s";
      return;
    }
    if(!phoneRegx.test(ph)){
      ccallPhone.style.borderColor = "red";
      errMsg.style.padding = "10px";
      errMsg.style.color = "red";
      errMsg.innerText = "Please enter a valid phone number!!";
      errMsg.style.transition = "0.4s";
      return;
    }
    errMsg.innerText = "";
    createCallBack(data);
  });
})();
// let img = document.querySelector('#lodImage');
// img.addEventListener('load', function(e){
//   console.log("Image loaded", e);
// });
// img.addEventListener('loadstart', function(e){
//   console.log("Image start loading");
// });
// img.addEventListener('loadend', function(e){
//   console.log("Image finish loading");
// });
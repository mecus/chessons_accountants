(function(){
    let sSection = document.querySelector('.services-section');
    let serViceAry = document.querySelectorAll('.service');
    let servHead = document.getElementById('service-headH1');
    let centerImage = document.querySelector('.center-image');
    let displayImage = document.querySelectorAll('.dImage');
    let audience = document.querySelector('.audience');
    let playr = document.querySelectorAll('.player');
    let audHead = document.getElementById('audHead');
    let textC = document.getElementById('text-ctrl');
    let pg = document.querySelector('.choices');
    let cb = document.querySelector('.call-back-form');
    let whyUs = document.querySelectorAll('.why-ch');
    let whyUS = document.querySelector('.why-us');
    let h1Text = document.getElementById('head-h1');
    let cropImg = document.getElementById('crop-image');
    let footer = document.querySelector('.footy');
    let textimony = document.querySelector('.texty');

    // Targeting smaller or mobile screen size
    let w = window.innerWidth;
    if(sSection){
        if(w <= 1024){
        let i;
        for(i = 0; i < serViceAry.length; i++){
            serViceAry[i].style.transform = "scale(1)";
            serViceAry[i].style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }
        }else{
            let i;
            for(i = 0; i < serViceAry.length; i++){
                serViceAry[i].style.transform = "scale(0)";
                serViceAry[i].style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            }
        }
    }
    // scroll event handlers
    window.addEventListener('scroll', function(e){
      e.preventDefault();
      let headtitle = this.document.getElementById('head-title');
      let topPage = document.getElementById('goTop');
      if(window.pageYOffset > 500){
        topPage.style.opacity = "1";
      }else{
        topPage.style.opacity = "0";
      }
      // Header text animation
      if(headtitle){
        if(window.pageYOffset > 50){
          headtitle.style.transform = "scale(0.8)";
          headtitle.style.transition = ".5s";
        }else{
          headtitle.style.transform = "scale(1)";
          headtitle.style.transition = ".5s";
        }
        if(window.pageYOffset > 100){
          headtitle.style.transform = "scale(0.5)";
          headtitle.style.transition = ".5s";
        }else{
          headtitle.style.transform = "scale(1)";
          headtitle.style.transition = ".5s";
        }
        if(window.pageYOffset > 150){
          headtitle.style.transform = "scale(0.2)";
          headtitle.style.transition = ".5s";
        }else{
          headtitle.style.transform = "scale(1)";
          headtitle.style.transition = ".5s";
        }

      }
      if(sSection){
          let SS = sSection.offsetTop;
          if(window.pageYOffset >= SS -300){
              servHead.style.fontSize = "2em";
              servHead.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
              setTimeout(function(){
                let i;
                for(i = 0; i < serViceAry.length; i++){
                    serViceAry[i].style.transform = "scale(1)";
                    serViceAry[i].style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                }
              }, 300); 
          }
      }
      if(centerImage){
          let CI = centerImage.offsetTop;
          if(window.pageYOffset >= CI - 400){
            let i;
            for(i = 0; i < displayImage.length; i++){
                displayImage[i].style.transform = "scale(1)";
                // displayImage[i].style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            }
          }
      }
      if(audience){
          let aud = audience.offsetTop;
          if(window.pageYOffset >= aud - 400){
            audHead.style.opacity= "1";
            let i;
            for(i = 0; i < playr.length; i++){
                playr[i].style.transform = "scale(1)";
                playr[i].style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            }
          }
      }

      if(pg){
        let topPos = pg.offsetTop;
        if(window.pageYOffset >= topPos - 400){
          textC.style.transform = "scale(1)";
          textC.style.transition = "0.5s";
          textC.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }
      }
      if(cb){
        let cbPos = cb.offsetTop;
        if(window.pageYOffset >= cbPos - 300){
          cb.style.transform = "rotateZ(360deg)";
        //   cb.style.transform = "translateY(0px)";
          cb.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          cb.style.position = "relative";
          cb.style.zIndex = "1";
        }
      }
      if(whyUS){
        let WU = whyUS.offsetTop;
        if(window.pageYOffset >= WU - 300){
          h1Text.style.transform = "scale(1)";
          h1Text.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          cropImg.style.transform = "translateX(0)";
        //   cropImg.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          var i;
          for(i = 0; i < whyUs.length; i++){
            whyUs[i].style.position = "relative";
            whyUs[i].style.left = "0";
            whyUs[i].style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          }
        }
      }
      if(footer){
        let foot = footer.offsetTop;
        if(window.pageYOffset >= foot - 600){
          footer.style.transform = "scale(1)";
          footer.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }
      }
      if(textimony){
        let textm = textimony.offsetTop;
        if(window.pageYOffset >= textm - 300){
          textimony.style.opacity = "1";
        //   textimony.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }
      }
    });
  })();
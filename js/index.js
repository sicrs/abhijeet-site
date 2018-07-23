const percentageVal = {
    shitposting: '0%',
    memeing: '0%',
    photoshop: '0%',
    achievement: '0%'
} 

function loadMDC() {
    const b = baffle('.title', {characters: 'sargibbathtrainoof', speed: 90}).start().once().reveal(500, 500);
    const typed = new Typed(".desc", {
        strings: ["Public Relations", "Student", "Moderator", "Memer", "Shitposter"],
        typeSpeed: 20,
        startDelay: 1000,
        loop: true,
        showCursor: false
    });
    anime({
        targets: '.fab-theme',
        opacity: 100,
        delay: 1500,
        duration: 3000,
    })
    const determinates = document.querySelectorAll('.mdc-linear-progress');
    for (let i = 0, determinate; determinate = determinates[i]; i++) {
        const linearprogress = new mdc.linearProgress.MDCLinearProgress(determinate);
        if (i === 0) {
            linearprogress.progress = 0.75;
        } else if (i === 1) {
            linearprogress.progress = 1;
        } else if (i === 2) {
            linearprogress.progress = 0.7;
        } else if (i === 3) {
            linearprogress.progress = 1;
        };
    };
    
    anime({
        targets: percentageVal,
        shitposting: '75%',
        memeing: '100%',
        photoshop: '70%',
        achievement: '110%',
        easing: 'linear',
        round: 1,
        update: function(anim) {
            document.querySelector('.shitposting').innerHTML = percentageVal.shitposting
            document.querySelector('.memeing').innerHTML = percentageVal.memeing
            document.querySelector('.photoshop').innerHTML = percentageVal.photoshop
            document.querySelector('.achievement').innerHTML = percentageVal.achievement
        }
    })
    
    
    var fabs = document.querySelectorAll('.mdc-fab');
    for (var i = 0, fab; fab = fabs[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(fab);
    };

    mdc.autoInit();
}



function toggle() {
    let fabVisible = false;
    const bTrain = document.getElementById("eg");
    if (fabVisible === false) {
        bTrain.classList.remove("invisible");
        fabVisible = true;
        bTrain.href = 'https://youtu.be/5YJgBfGeXPg'
    } else {
        //check 
        if (bTrain.classList.contains("invisible")) {
            bTrain.classList.remove("invisible");
        } else {
            return;
        };
        
    };
};


function toggleTheme() {
    const bodyEl = document.body
    if (bodyEl.classList.contains("theme-dark")) {
        bodyEl.classList.remove("theme-dark");
        bodyEl.classList.add("theme-light");
    } else {
        bodyEl.classList.add("theme-dark");
        bodyEl.classList.remove("theme-light");
    }

    
}

 /*
//scrollTO
document.getElementsByTagName('no')[0].onclick = function () {
    scrollTo(document.body, 0, 1250);   
 }
     
 function scrollTo(element, to, duration) {
     var start = element.scrollTop,
         change = to - start,
         currentTime = 0,
         increment = 20;
         
     var animateScroll = function(){        
         currentTime += increment;
         var val = Math.easeInOutQuad(currentTime, start, change, duration);
         element.scrollTop = val;
         if(currentTime < duration) {
             setTimeout(animateScroll, increment);
         }
     };
     animateScroll();
 }
 
 //t = current time
 //b = start value
 //c = change in value
 //d = duration
 Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
     if (t < 1) return c/2*t*t + b;
     t--;
     return -c/2 * (t*(t-2) - 1) + b;
 };
 */
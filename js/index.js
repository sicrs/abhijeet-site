let origContent
document.body.onload = () => {
    loadMDC()
}

const percentageVal = {
    shitposting: '0%',
    memeing: '0%',
    photoshop: '0%',
    achievement: '0%',
    shitpostingVal: 0,
    memeingVal: 0,
    photoshopVal: 0,
    achievementVal: 0
} 

function loadMDC() {
    const b = baffle('.title', {characters: 'sargibbathtrainoof', speed: 90}).start().once().reveal(500, 500);
    const typed = new Typed(".desc", {
        strings: ["Public Relations ^300/  Student ^300/ Moderator ^300/ Memer ^300/ Shitposter"],
        typeSpeed: 10,
        startDelay: 1000,
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
            linearprogress.foundation_.setProgress(0);
        } else if (i === 1) {
            linearprogress.progress = 0;
        } else if (i === 2) {
            linearprogress.progress = 0;
        } else if (i === 3) {
            linearprogress.progress = 0;
        };
    };
    
    anime({
        targets: percentageVal,
        shitposting: '75%',
        memeing: '100%',
        photoshop: '70%',
        achievement: '110%',
        easing: 'linear',
        shitpostingVal: 0.75,
        memeingVal: 1,
        photoshopVal: 0.7,
        achievementVal: 1.1,
        round: 1,
        update: function(anim) {
            const determinates = document.querySelectorAll('.mdc-linear-progress');
            for (let i = 0, determinate; determinate = determinates[i]; i++) {
                const linearprogress = new mdc.linearProgress.MDCLinearProgress(determinate);
                if (i === 0) {
                    linearprogress.foundation_.setProgress(percentageVal.shitpostingVal);
                } else if (i === 1) {
                    linearprogress.foundation_.setProgress(percentageVal.memeingVal);
                } else if (i === 2) {
                    linearprogress.foundation_.setProgress(percentageVal.photoshopVal);
                } else if (i === 3) {
                    linearprogress.foundation_.setProgress(percentageVal.achievementVal);
                };
            document.querySelector('.shitposting').innerHTML = percentageVal.shitposting 
            document.querySelector('.memeing').innerHTML = percentageVal.memeing
            document.querySelector('.photoshop').innerHTML = percentageVal.photoshop
            document.querySelector('.achievement').innerHTML = percentageVal.achievement
            }
        }
    })
    
    mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));

    mdc.chips.MDCChipSet.attachTo(document.querySelector('.mdc-chip-set'));

    const fabs = document.querySelectorAll('.mdc-fab');
    for (var i = 0, fab; fab = fabs[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(fab);
    };

    const timeline = new anime.timeline({
        targets: '.scroll-icon',
        loop: true,
        duration: 1000
    })

    timeline.add({
        translateY: -20,
    })
    .add({
        opacity: 0
    })
    
}

function toggle() {
    let fabVisible = false;
    const bTrain = document.getElementById("eg");
    if (bTrain.classList.contains("invisible")) {
        bTrain.classList.remove("invisible");
        bTrain.href = 'https://youtu.be/5YJgBfGeXPg'
    } else {
        return;
    };
};

function changeProperty(el, property, change) {
    const element = document.querySelector(el);
    element.style.setProperty(property, change)
}

function toggleTheme() {
    const bodyEl = document.body
    if (bodyEl.classList.contains("theme-dark")) {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#FFFFFF");
        anime({
            targets: document.querySelectorAll('.animate'),
            backgroundColor: '#FFFFFF',
            duration: 2000,
                    
        })
        bodyEl.classList.remove("theme-dark");
        bodyEl.classList.add("theme-light");
    } else {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
        anime({
            targets: document.querySelectorAll('.animate'),
            backgroundColor: '#000000',
            duration: 2000,         
        })
        bodyEl.classList.add("theme-dark");
        bodyEl.classList.remove("theme-light");
    }
    
}

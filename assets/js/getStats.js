
let showStatsButton = document.querySelector('#giveStats');
let hideStatsButtocks = document.querySelector('#buttocks');
let theDivToShowOrHide = document.querySelector('#beforYouStart');
let ontheroadhone = document.querySelector('.ontheroad h1');

showStatsButton.addEventListener('click', () => {
    ontheroadhone.style.display = 'none';
    if (theDivToShowOrHide.style.opacity === 0) {
        theDivToShowOrHide.animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
        ], {
            // timing options
            duration: 2000
        });
    } else {
        theDivToShowOrHide.style.opacity = 1;
        theDivToShowOrHide.style.display = 'flex';
    }
});

hideStatsButtocks.addEventListener('click', () => {
    ontheroadhone.style.display = 'flex';
    if (theDivToShowOrHide.style.opacity === 1) {
        theDivToShowOrHide.animate([
            // keyframes
            { opacity: '1' },
            { opacity: '0' }
        ], {
            // timing options
            duration: 1000
        });
    } else {
        theDivToShowOrHide.style.opacity = 0;
    };
    setTimeout(() => {
        window.location.reload();
    }, 3000);
});


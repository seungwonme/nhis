function topLayer() {
    document.querySelector('#layerPopup').id = 'none';
    document.querySelector('#wrap').classList.remove('t40');
}
document.querySelector('#close').addEventListener('click', topLayer);
// ~ topLayer

const personButton = document.querySelector('.menuToggle button')
const businessButton = document.querySelector('.menuToggle button:last-child')
personButton.addEventListener("click",function () {
    personButton.classList.add("on")
    businessButton.classList.remove("on")
})
businessButton.addEventListener("click",function () {
    personButton.classList.remove("on")
    businessButton.classList.add("on")
})



// ~ .on button

function gnbOpen() {
    document.querySelector('.gnbMenu').id = 'block';
    document.querySelector('#wrap').classList.toggle('none');
}
function gnbClose() {
    document.querySelector('.gnbMenu').id = 'none';
    document.querySelector('#wrap').classList.toggle('none');
}
document.querySelector('.topMenu').addEventListener('mouseenter', gnbOpen);
document.querySelector('.gnbMenu').addEventListener('mouseenter', gnbOpen);
document.querySelector('.topMenu').addEventListener('mouseleave', gnbClose);
document.querySelector('.gnbMenu').addEventListener('mouseleave', gnbClose);
// ~ GNB

const noticeBanner = document.querySelector('.noticeBanner ul');
const noticeBannerNext = document.querySelector('.boxRight');
const noticeBannerPrev = document.querySelector('.boxLeft');
const noticeBannerStop = document.querySelector('.boxStop');
const noticeBannerImg = document.querySelector('.bgImg');
const noticeBannerBox = document.querySelectorAll('.boxViewport .cf li').length
const nth = document.querySelector('.nth');
let i = 1;
let index = 1;
noticeBanner.style.transform = `translate(-${noticeBannerImg.width}px)`;
function next() {
    index++;
    i++;
    nth.innerText = index;
    noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
    if (index === 14) {
        index = 0;
    }
    if (i === 1) {
        --index;
        noticeBanner.classList.remove('on');
        next()
        noticeBanner.classList.add('on')
    } else if (i === 15) {
        i = 0;
    }
}
noticeBannerNext.addEventListener('click', next);
noticeBannerPrev.addEventListener('click', function prev() {
    if (index === 1) {
        index = 15;
    }
    index --
    i--;
    nth.innerText = index;
    noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
    if (i === 15) {
        --index;
        noticeBanner.classList.remove('on');
        prev()
        noticeBanner.classList.add('on')
    } else if (i === 0) {
        i = 15;
    }
});
const autoBanner = setInterval(next, 3000);
autoBanner;
noticeBannerStop.addEventListener('click', function () {
    clearInterval(autoBanner);
});


//~banner
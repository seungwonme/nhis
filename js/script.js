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
const nth = document.querySelector('.nth');
let i = 1;
noticeBanner.style.transform = `translate(-${noticeBannerImg.width}px)`;
function right() {
    i++;
    nth.innerText = i;
    noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
    if (i === 14) {
        noticeBanner.style.transform = `translate(-${noticeBannerImg.width}px)`;
        i = 1;
    }
}
noticeBannerNext.addEventListener('click', right);
noticeBannerPrev.addEventListener('click', function () {
    i--;
    nth.innerText = i;
    noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
    if (i === -1) {
        noticeBanner.style.transform = `translate(-${13 * noticeBannerImg.width}px)`;
        i = 13;
    }
});
const autoBanner = setInterval(right, 3000);
autoBanner;
noticeBannerStop.addEventListener('click', function () {
    clearInterval(autoBanner);
});

//~banner



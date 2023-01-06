function topLayer() {
    document.querySelector('#layerPopup').id = 'none';
    document.querySelector('#wrap').classList.remove('t40');
}
document.querySelector('#close').addEventListener('click', topLayer);
// ~ topLayer

const personButton = document.querySelector('.menuToggle button');
const businessButton = document.querySelector('.menuToggle button:last-child');
personButton.addEventListener('click', function () {
    personButton.classList.add('on');
    businessButton.classList.remove('on');
});
businessButton.addEventListener('click', function () {
    personButton.classList.remove('on');
    businessButton.classList.add('on');
});

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
const nth = document.querySelector('.noticeBanner em');
let i = 1;
let index = 1;

function next() {
    if (index === 14) {
        index = 0;
    }
    index++;
    i++;
    nth.innerText = index;
    noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
    if (i === 1) {
        --index;
        noticeBanner.classList.remove('on');
        next();
        noticeBanner.classList.add('on');
    } else if (i === 15) {
        i = 0;
    }
}
function prev() {
    if (index === 1) {
        index = 15;
    }
    index--;
    i--;
    nth.innerText = index;
    noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
    if (i === 14) {
        ++index;
        noticeBanner.classList.remove('on');
        prev();
        noticeBanner.classList.add('on');
    } else if (i === 0) {
        i = 15;
    }
}
noticeBannerNext.addEventListener('click', next);
noticeBannerPrev.addEventListener('click', prev);

const autoBanner = function () {
    id = setInterval(function () {
        if (index === 14) {
            index = 0;
        }
        index++;
        i++;
        nth.innerText = index;
        noticeBanner.style.transform = `translate(-${i * noticeBannerImg.width}px)`;
        if (i === 1) {
            --index;
            noticeBanner.classList.remove('on');
            next();
            noticeBanner.classList.add('on');
        } else if (i === 15) {
            i = 0;
        }
    }, 3000);
};
autoBanner();

noticeBannerStop.addEventListener('click', function () {
    if (noticeBannerStop.classList[1] === undefined) {
        clearInterval(id);
    } else {
        autoBanner();
    }
    noticeBannerStop.classList.toggle('off');
});

document.querySelector('.noticeBanner .boxLeft').addEventListener('mouseenter', function () {
    clearInterval(id);
});
document.querySelector('.noticeBanner .boxLeft').addEventListener('mouseleave', function () {
    autoBanner();
});
document.querySelector('.noticeBanner .boxRight').addEventListener('mouseenter', function () {
    clearInterval(id);
});
document.querySelector('.noticeBanner .boxRight').addEventListener('mouseleave', function () {
    autoBanner();
});
noticeBanner.addEventListener('mouseenter', function () {
    clearInterval(id);
});
noticeBanner.addEventListener('mouseleave', function () {
    autoBanner();
});
//~notice banner

const promotionBanner = document.querySelector('.promotionZone .boxViewport');
const promotionBannerNext = document.querySelector('.promotionZone .boxRight');
const promotionBannerPrev = document.querySelector('.promotionZone .boxLeft');
const promotionBannerStop = document.querySelector('.promotionZone .boxStop');
const promotionBannerImg = document.querySelector('.promotionZone img');
const nth2 = document.querySelector('.promotionZone em');
let j = 1;
let index2 = 1;

function next2() {
    if (index2 === 3) {
        index2 = 0;
    }
    index2++;
    j++;
    nth2.innerText = index2;
    promotionBanner.style.transform = `translate(-${j * promotionBannerImg.width}px)`;
    if (j === 1) {
        --index2;
        promotionBanner.classList.remove('on');
        next2();
        promotionBanner.classList.add('on');
    } else if (j === 4) {
        j = 0;
    }
}
function prev2() {
    if (index2 === 1) {
        index2 = 4;
    }
    index2--;
    j--;
    nth2.innerText = index2;
    promotionBanner.style.transform = `translate(-${j * promotionBannerImg.width}px)`;
    if (j === 3) {
        ++index2;
        promotionBanner.classList.remove('on');
        prev2();
        promotionBanner.classList.add('on');
    } else if (j === 0) {
        j = 4;
    }
}
promotionBannerNext.addEventListener('click', next2);
promotionBannerPrev.addEventListener('click', prev2);

const autoBanner2 = function () {
    id2 = setInterval(function () {
        if (index2 === 3) {
            index2 = 0;
        }
        index2++;
        j++;
        nth2.innerText = index2;
        promotionBanner.style.transform = `translate(-${j * promotionBannerImg.width}px)`;
        if (j === 1) {
            --index2;
            promotionBanner.classList.remove('on');
            next2();
            promotionBanner.classList.add('on');
        } else if (j === 4) {
            j = 0;
        }
    }, 3000);
};
autoBanner2();

promotionBannerStop.addEventListener('click', function () {
    if (promotionBannerStop.classList[1] === undefined) {
        clearInterval(id2);
    } else {
        autoBanner2();
    }
    promotionBannerStop.classList.toggle('off');
});

document.querySelector('.promotionZone .boxLeft').addEventListener('mouseenter', function () {
    clearInterval(id2);
});
document.querySelector('.promotionZone .boxLeft').addEventListener('mouseleave', function () {
    autoBanner2();
});
document.querySelector('.promotionZone .boxRight').addEventListener('mouseenter', function () {
    clearInterval(id2);
});
document.querySelector('.promotionZone .boxRight').addEventListener('mouseleave', function () {
    autoBanner2();
});
promotionBanner.addEventListener('mouseenter', function () {
    clearInterval(id2);
});
promotionBanner.addEventListener('mouseleave', function () {
    autoBanner2();
}); 

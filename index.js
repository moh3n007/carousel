window.addEventListener("load" , () => {
    let images = [
        {
            id : 'img-1',
            src : 'images/1692.jpg'
        },
        {
            id : 'img-2',
            src : 'images/1692 (1).jpg'
        },
        {
            id : 'img-3',
            src : 'images/1692 (2).jpg'
        },
        {
            id : 'img-4',
            src : 'images/1692 (3).jpg'
        },
    ];
    class slideShow {
        constructor() {
            this.images = images;
            this.animSlide = (() => {
                let i = 1
                setInterval(() => {
                    if (i === this.images.length + 1) {
                        i = 1;
                    } 
                    let imgPrvID = "img-" + (i-1);
                    let imgID = "img-" + i;
                    let imgNextID = "img-" + (i+1);
                    if (i === this.images.length) {
                        imgNextID = "img-1";
                    }else if(i === 1) {
                        imgPrvID = "img-" + this.images.length; 
                    }
                    let img = document.getElementById(imgID);
                    let imgNext = document.getElementById(imgNextID);
                    let imgPvr = document.getElementById(imgPrvID);
                    // console.log(img , imgNext);
                    img.setAttribute('style' , 'left: 100%;visibility: hidden');
                    imgNext.setAttribute('style' , 'left: 0;visibility: visible');
                    imgPvr.setAttribute('style' , 'left: -100%;visibility: hidden');
                    i++;

                } , 3000);
            })();
            this.slidePosition = (() => {
                setInterval(() => {
                    let len = this.images.length;
                    for(let i = 0;i < len; ++i) {
                        let imgId = '#img-' + (i+1);
                        let img = document.querySelector(imgId);
                        // console.log(img.style.visibility)
                        let imgPosId = '#pos-img' + (i+1);
                        let imgPos = document.querySelector(imgPosId);
                        if(img.style.visibility === 'visible') {
                            imgPos.children['here'].style.opacity = 1;
                        }else {
                            imgPos.children['here'].style.opacity = 0;
                        }
                    }
                } , 3000)
            })()
        }
    }

    new slideShow();
})
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
            this.startCarousel = 1;
            this.intervals = [];
            this.animSlide = () => {
                this.clickCarouselPos();
                this.setInterval(this.startCarousel);
                
            };

            this.setInterval = (i) => {
                let int = setInterval(() => {
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
                    img.setAttribute('style' , 'left: 100%;visibility: hidden');
                    imgNext.setAttribute('style' , 'left: 0;visibility: visible');
                    imgPvr.setAttribute('style' , 'left: -100%;visibility: hidden');
                    i++;

                    this.carouselPosition();
                } , 3000);
                this.intervals.push(int);
            }
            this.carouselPosition = () => {
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
            };
            this.clickCarouselPos = () => {
                let length = this.images.length;
                for(let i = 0;i < length; ++i) {
                    let posId = 'pos' + (i+1);
                    let posImg = document.getElementById(posId);
                    posImg.addEventListener('click' , () => {
                        this.intervals.forEach(clearInterval);
                        this.intervals = []
                        for(let j = 1;j <= length; ++j) {
                            let id = 'pos-img' + j;
                            let idImg = 'img-' + j;
                            let pos = document.getElementById(id);
                            pos.children['here'].style.opacity = 0;

                            let img = document.getElementById(idImg);
                            img.setAttribute('style' , 'left: -100x;visibility: hidden');

                        }
                        console.log(posImg);
                        let imgPosId = 'pos-img' + (i+1);
                        let imgId = 'img-' + (i+1);
                        let nextImgId = 'img-' + (i+2);
                        let preImgId;
                        if(i === 0) {
                            preImgId = 'img-' + length;
                        } else if(i === length-1) {
                            nextImgId = 'img-1';
                            preImgId = 'img-' + (i);
                        }else {
                            preImgId = 'img-' + (i);
                        }
                        let imgPos = document.getElementById(imgPosId);
                        let img = document.getElementById(imgId);
                        img.setAttribute('style' , 'left: 0;visibility: visible');
                        imgPos.children['here'].style.opacity = 1;
                        this.setInterval((i+1));
                        console.log(this.intervals)
                    })
                };
            }
            this.animSlide();
            // this.clickCarouselPos();
        }
    }

    new slideShow();
})
window.addEventListener('load', function() {

    // banner轮播图开始
    var prevArrow = this.document.querySelector('.banner-prev');
    var nextArrow = this.document.querySelector('.banner-next');

    // 获取图片和小点
    var imgs = this.document.querySelectorAll('.banner-img');
    var dots = this.document.querySelector('.dots').querySelectorAll('span');
 
    // 给图片设置index 属性，好判断当前的图片是哪一张
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('data-index', i);
    }
 
    // 获取当前图片 和 图片的index（数组下标）
    var current = this.document.querySelector('.current');
    var currentIndex = current.getAttribute('data-index');
 
    // 左箭头的点击事件，点击了就返回前一张图片 
    // 如果当前图片为第一张那么需要更换到最后一张图片也就是第四张
    prevArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[--currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 4;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    });
 
    // 点击右箭头下一张图片切换
    // 如果当前为第五张图片，那么切换回第一张图片
    nextArrow.addEventListener('click', changeImage);
 
    var timer = this.setInterval(changeImage, 8000);
 
    function changeImage() {
        if (currentIndex < 4) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[++currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    };
 
    // 小圆点的点击事件
    for (let k = 0; k < dots.length; k++) {
        dots[k].setAttribute('data-index', k);
        dots[k].addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            if (index != currentIndex) {
                imgs[currentIndex].classList.remove('current');
                dots[currentIndex].classList.remove('square');
                imgs[index].classList.add('current');
                dots[index].classList.add('square');
                currentIndex = index;
            }
 
        })
    }
    // banner轮播图结束

    //获取 li 也就是选项卡选项tab
    var tab=this.document.querySelector('#product-tabs');
    var oTab=tab.querySelectorAll('li');
    //获取 包裹在container里面的section（内容）
    var box=this.document.querySelector('#product-list-box');
    var oList=box.querySelectorAll('.product-list');
    //使用 循环依次得到li 
    for(var i=0;i<oTab.length;i++){
        oTab[i].index=i;
    //每一次得到li后执行鼠标点击操作则触发函数function 
        oTab[i].onclick=function () { //此处除了可以使用onclick，还可以使用onmouseover
    //在li的个数内依次展示内容 
            for(var i=0;i<oTab.length;i++){
                oTab[i].className='';
                oList[i].style.display="none";
            }
            this.className='active';
            oList[this.index].style.display="block";
        }
        for(var m=1;m<oTab.length;m++){
            oTab[m].className='';
            oList[m].style.display="none";
        }
    }

    //获取 li 也就是选项卡选项tab
    var prev = this.document.querySelector('.brands-list .prev');
    var next = this.document.querySelector('.brands-list .next');
    //获取 包裹在container里面的section（内容）
    var bList=this.document.querySelector('.brands-list');
    var listUl=bList.querySelectorAll('ul');
    //使用 循环依次得到li  
    prev.onclick=function () { //此处除了可以使用onclick，还可以使用onmouseover
    //在li的个数内依次展示内容 
        listUl[0].style.display="block";
        listUl[1].style.display="none";
    }
    next.onclick=function () { //此处除了可以使用onclick，还可以使用onmouseover
    //在li的个数内依次展示内容 
        listUl[0].style.display="none";
        listUl[1].style.display="block";
    }

});

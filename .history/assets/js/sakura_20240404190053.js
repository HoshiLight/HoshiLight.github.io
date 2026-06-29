// 图片路径
const petalImage = "./assets/img/common/cherry-blossom.png";

/* 
 new↓
*/
let generatePetalsEnabled = true; // 用于标识是否生成花瓣的状态

// 监听用户滚动事件
window.addEventListener('scroll', () => {
    // 如果用户不在浏览器窗口中，则停止生成花瓣
    if (!isElementInViewport(document.getElementById('petal-container'))) {
        generatePetalsEnabled = false;
    }// 如果用户在浏览器窗口中，则允许生成花瓣
    else {
        generatePetalsEnabled = true;
    }
});

// 检测元素是否在视口中的函数
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
/* 
 new↑
*/

// 创建花瓣元素的函数
function createPetal() {
    //new 
    if (!generatePetalsEnabled) {
        return; // 如果不允许生成花瓣，则直接返回
    }
    // 创建花瓣元素
    const petal = document.createElement('img');
    petal.src = petalImage;
    petal.classList.add('petal');

    // 设置花瓣的随机位置和大小
    petal.style.left = Math.random() * document.documentElement.scrollWidth + 'px';
    petal.style.top = '-30px';

    /*  petal.style.transform = 'scale(' + (0.5 + Math.random()) + ')'; */
    // 根据页面视口大小确定花瓣大小
    /* const petalSize = Math.random() * (window.innerWidth / 10) + 10; */
    // 根据页面视口大小确定花瓣大小
    let petalSize = 10;
    
    // 生成一个随机数，决定花瓣大小
    let randomNum = Math.random();
    // 根据随机数调整花瓣大小
    if (randomNum < 0.95) {
        petalSize = Math.random() * 10 + 0; // 大部分花瓣比较小
    }
    else if (randomNum < 0.99) {
        petalSize = Math.random() * 23 + 0; // 大部分花瓣比较小
    }
    else {
        petalSize = Math.random() * 300 + 10; // 少数花瓣比较大
    }
    /* // 生成花瓣的数量比例
    const smallPetalCount = 399; // 小花瓣数量
    const mediumPetalCount = 11; // 中等花瓣数量
    const largePetalCount = 1; // 大花瓣数量

    // 生成花瓣的大小范围
    const smallPetalSizeRange = { min: 10, max: 50 };
    const mediumPetalSizeRange = { min: 50, max: 100 };
    const largePetalSizeRange = { min: 100, max: 300 };

    // 生成小花瓣
    for (let i = 0; i < smallPetalCount; i++) {
        petalSize = Math.random() * (smallPetalSizeRange.max - smallPetalSizeRange.min) + smallPetalSizeRange.min;
    }
    // 生成大花瓣
    for (let i = 0; i < largePetalCount; i++) {
        petalSize = Math.random() * (largePetalSizeRange.max - largePetalSizeRange.min) + largePetalSizeRange.min;
    }
    // 生成中等花瓣
    for (let i = 0; i < mediumPetalCount; i++) {
        petalSize = Math.random() * (mediumPetalSizeRange.max - mediumPetalSizeRange.min) + mediumPetalSizeRange.min;
    }
 */
/*     petal.style.transform = `scale(${petalSize / 100})`;
 */
  // 随机角度偏移和翻转
  const rotation = Math.random() * 360; // 随机角度
  const flip = Math.random() < 0.5 ? -1 : 1; // 随机翻转

  petal.style.transform = `scale(${petalSize / 100}) rotate(${rotation}deg) scaleX(${flip})`;

    // 将花瓣添加到容器中
    document.getElementById('petal-container').appendChild(petal);
    movePetal(petal);
    const checkOpacityInterval = setInterval(() => {
        if (!generatePetalsEnabled) {
            return;
        }

        const opacity = parseFloat(window.getComputedStyle(petal).opacity);
        if (opacity <= 0.39) {
            // 当花瓣透明度降低到一定程度时，移除花瓣
            petal.parentNode.removeChild(petal);
            clearInterval(checkOpacityInterval); // 停止定时器
        }
    }, 500); // 每隔一秒检测一次透明度
    // 这边的代码放在最底部的话不行，然后放在这里的话成功解决花瓣卡壳。
    
}

// 花瓣飘落的动画函数
function movePetal(petal) {
    /* // 设置花瓣的飘落时间和大小
    let duration = 15000 + Math.random() * 3000;
    let size = Math.random() * 100;
    // 设置花瓣的过渡效果
    petal.style.transition = `transform ${duration}ms linear, opacity ${duration}ms, width ${duration}ms, height ${duration}ms`; */
    // 设置花瓣的飘落时间和大小，以及速度
    let duration = 20000 + Math.random() * 1000; // 花瓣下落时间在15秒到20秒之间随机
    let size = Math.random() * 100;
    let speed = Math.random() * 0.3 ; // 花瓣下落速度在0.5到1之间随机 注意数值越小，下落速度越快
    // 设置花瓣的过渡效果
    petal.style.transition = `transform ${duration}ms linear, opacity ${duration}ms, width ${duration}ms, height ${duration}ms`;

    // // 设置花瓣的飘落方向和距离
    // let direction = Math.random() < 1 ? -1 : 1;
    // let startX = Math.random() * document.body.clientWidth;
    // let endX = startX + direction * Math.random() * document.documentElement.scrollWidth;
    // // 设置花瓣的最终位置和透明度
    // petal.style.transform = `translate(${endX}px, ${document.documentElement.clientHeight+100}px)`;
    // petal.style.opacity = 0.39;//透明度允许使用小数值。
    // 获取父div元素的宽度


    /* 重要  重要 解决 横屏无限延长的问题和樱花代码有关   */
let parentDivWidth = document.getElementById('ParentDivId').clientWidth;

// 设置花瓣的飘落方向和距离
let direction = Math.random() < 1 ? -1 : 1;
let endX =  direction * Math.random() * parentDivWidth; // 使用父div的宽度

// 设置花瓣的最终位置和透明度
petal.style.transform = `translate(${Math.min(endX, parentDivWidth)}px, ${document.documentElement.clientHeight + 100}px)`;
petal.style.opacity = 0.39; // 透明度允许使用小数值。

    /* petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.filter = `blur(${6}px)`; */
    // 根据花瓣大小调整高斯模糊程度
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    const blurAmount = size / 11; // 调整这个值以控制模糊程度
    petal.style.filter = `blur(${blurAmount}px)`;
    
    // *** 根据速度调整过渡时间
    petal.style.transitionDuration = `${speed * duration}ms`; 

        
    // 动画结束后移除花瓣
    /* setTimeout(() => {
        // console.log("Removing petal");
        petal.parentNode.removeChild(petal);
    }, duration); */
    // 动画结束后移除花瓣（当花瓣到达页面底部时移除）
    /* setTimeout(() => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const petalBottomPosition = petal.getBoundingClientRect().bottom;
        if (petalBottomPosition >= windowHeight) {
            petal.parentNode.removeChild(petal);
        }
    }, duration); */
    // 设置定时器，每隔一秒检测一次花瓣是否到达底部
  /*   const checkBottomInterval = setInterval(() => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const petalBottomPosition = petal.getBoundingClientRect().bottom;

    if (petalBottomPosition >= windowHeight) {
        // 当花瓣到达底部时，移除花瓣
        petal.parentNode.removeChild(petal);
    }
    }, 500); // 每隔一秒检测一次 */

}

// 生成大量花瓣的函数
function generatePetals() {
    //new 
    if (!generatePetalsEnabled) {
        return; // 如果不允许生成花瓣，则直接返回
    }
    /* // 设置同时在屏幕上的花瓣数量
    const numberOfPetals = 350;
    // 循环创建花瓣，并控制每隔一段时间创建一个花瓣
    for (let i = 0; i < numberOfPetals; i++) {
        setTimeout(createPetal, i * 100);
    } */
    // 动态计算屏幕视口大小，然后设置同时在屏幕上的花瓣数量
    /* const numberOfPetals = Math.floor(window.innerWidth * 3 ); // 以屏幕宽度的十分之一作为花瓣数量 */
    const numberOfPetals = 199 // 以屏幕宽度的十分之一作为花瓣数量
    // 循环创建花瓣，并控制每隔一段时间创建一个花瓣
    for (let i = 0; i < numberOfPetals; i++) {
        setTimeout(createPetal, i * 100);
    }
    // new 设置定时器，每隔一段时间重新执行生成花瓣
   /*  setTimeout(() => {
        generatePetals();
    }, 5000); // 每5秒重新生成花瓣 */
}

// 开始生成花瓣
generatePetals();
// 设置定时器定期生成花瓣以保持屏幕上花瓣数量
//old
setInterval(generatePetals, 5000); // 每5秒重新生成花瓣 

/* ?????// 设置定时器定期检测用户是否在浏览器窗口中
setInterval(() => {
    if (!isElementInViewport(document.getElementById('petal-container'))) {
        generatePetalsEnabled = false; // 用户不在浏览器窗口中，停止生成花瓣
    } else {
        generatePetalsEnabled = true; // 用户在浏览器窗口中，允许生成花瓣
    }
}, 1000); // 每隔一秒检测一次 */
/* document.documentElement.scrollWidth VS window.innerWidth */

/* new xxx // 设置定时器，每隔一秒检测一次花瓣是否到达底部
const checkBottomInterval = setInterval(() => {
    if (!generatePetalsEnabled) {
        clearInterval(checkBottomInterval); // 如果不允许生成花瓣，则停止定时器
        return;
    }
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const petalBottomPosition = petal.getBoundingClientRect().bottom;

    if (petalBottomPosition >= windowHeight) {
        // 当花瓣到达底部时，移除花瓣
        petal.parentNode.removeChild(petal);
        clearInterval(checkBottomInterval); // 停止定时器
    }
}, 1000); // 每隔一秒检测一次 */
// 设置定时器，每隔一秒检测一次花瓣是否到达底部
/* const checkBottomInterval = setInterval(() => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const petalBottomPosition = petal.getBoundingClientRect().bottom;

    if (petalBottomPosition >= windowHeight) {//这个判断依据应该是以透明度为依据的 不是仅仅根据位置 防止窗口大小改变。
    //还是无效，不知道为什么。就是 窗口大小改变会出现花瓣卡壳。
        // 当花瓣到达底部时，移除花瓣
        petal.parentNode.removeChild(petal);
        clearInterval(checkBottomInterval); // 停止定时器
    }
}, 500); // 每隔一秒检测一次 */
// 动画结束后移除花瓣（当花瓣透明度降低到一定程度时移除）
/* const checkOpacityInterval = setInterval(() => {
    if (!generatePetalsEnabled) {
        clearInterval(checkOpacityInterval); // 如果不允许生成花瓣，则停止定时器
        return;
    }

    const opacity = parseFloat(window.getComputedStyle(petal).opacity);
    if (opacity <= 0.7) {
        // 当花瓣透明度降低到一定程度时，移除花瓣
        petal.parentNode.removeChild(petal);
        clearInterval(checkOpacityInterval); // 停止定时器
    }
}, 500); // 每隔一秒检测一次透明度 */


/* =============================other======================== */
document.addEventListener('DOMContentLoaded', function() {
    function removeBlurAndFadeOutBackground() {
       // 在2秒后移除模糊效果
      setTimeout(function() {
        document.querySelector('.sakura-background').classList.remove('sakura-blur');
      }, 3000);

      function fadeOutBackground(element) {
        // 确保元素的不透明度初始值为1（如果不透明度已经是0，则不会有淡出效果）
        element.style.opacity = 1;

        // 使用setTimeout来延迟设置不透明度为0，以触发transition
        setTimeout(function() {
          element.style.opacity = 0;
        }, 6000); // 延迟时间为0毫秒，立即执行
      }

      // 获取背景元素
      var backgroundElement = document.querySelector('.sakura-background');

      // 调用函数以淡出背景
      fadeOutBackground(backgroundElement);
         
    /*   setTimeout(function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = './assets/img/common/as_the_moon.png'; // 替换成你的图片 URL
    
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
    
            // 图片溶解效果
            dissolveEffect(ctx, img);
    // alert("99999");
            // 左到右线性显示效果
            linearShowEffect(ctx, img);
        };
    
    }, 9999);  */
    setTimeout(function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var text = 'み ん な で 叶 え た 物 語';
        var x = 50; // 文本起始位置 x 坐标
        var y = 50; // 文本起始位置 y 坐标
        var fontSize = 40; // 字体大小
        var alpha = 0; // 初始透明度
        
        ctx.font = fontSize + 'px Arial'; // 设置字体大小和类型
        
        var drawText = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
            ctx.fillStyle = 'rgba(0, 0, 0, ' + alpha + ')'; // 设置文本颜色及透明度
            ctx.fillText(text, x, y); // 在指定位置绘制文本
            alpha += 0.01; // 增加透明度
            if (alpha < 1) {
                requestAnimationFrame(drawText); // 递归调用，实现动画效果
            }
        };
        
        drawText(); // 开始绘制文本
        
    }, 9999);
    
    }
    // alert("1");

// 检查页面是否出现 'l-ani' 类名，如果是则调用函数
/* if (document.body.classList.contains('is-portrait')) {
    removeBlurAndFadeOutBackground();
    alert("2");
} */
    // 假设类名 'is-portrait' 是在某个事件或函数中动态添加的
// 例如，下面是一个添加类名的示例，你需要根据实际情况调整
/* document.body.addEventListener('click', function() {
    document.body.classList.add('is-portrait');

    // 检查页面是否出现 'is-portrait' 类名，如果是则调用函数
    if (document.body.classList.contains('is-portrait')) {
        // 调用你的函数或执行相应的操作

        removeBlurAndFadeOutBackground();
    }
}); */
// 设置定时器，每隔一定时间检测一次是否存在 'is-portrait' 类名
var checkInterval = setInterval(function() {
    // var loadingElement = document.querySelector('.Loading l-ani');
    var loadingElement = document.querySelector('.Loading.l-ani');  // 修正选择器
//这边一定要这边一定要注意，这个选择器要做正确。
    // if ( loadingElement.style.display === 'none') {
// alert("3");

        //  if ( document.body.classList.contains('l-ani')) {有时候页面加载会加载特别久。
    // 在<body>元素中同时存在 'Loading' 和 'l-ani' 类名时执行的操作
    removeBlurAndFadeOutBackground();

        // 清除定时器，不再继续检测
        clearInterval(checkInterval);
    // }
}, 1000); // 设置定时器间隔为1秒，你可以根据需要调整

      // 逐渐显示文本
      const text = "月がきれい。";
      const textElement = document.querySelector('.sakura-text-image');
      let index = 0;

      function showText() {
        if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
          setTimeout(showText, 3000); // 调整文本显示速度
        }
      }

     /*  setTimeout(function() {
        document.querySelector('.content').style.opacity = 1;
        showText();
      }, 8000); // 等待4秒后显示文本 */
     /*  setTimeout(function() {
          var contentElement = document.querySelector('.content');
          contentElement.style.opacity = 1;
          contentElement.style.animation = 'fadeInFromRight 1s ease-in-out';
          showText();
      }, 8000); */
      /*  */
      /* setTimeout(function() {
          var contentElement = document.querySelector('.content');
          contentElement.style.opacity = 1;
          // contentElement.style.backgroundImage = 'url("./assets/img/common/as_the_moon.png")';  // 替换成你的图片 URL
          contentElement.style.animation = 'fadeInFromLeft 3s ease-in-out';
          showText();
      }, 8000); */
     /*  setTimeout(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = './assets/img/common/as_the_moon.png'; // 替换成你的图片 URL

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;

        // 图片溶解效果
        dissolveEffect(ctx, img);

        // 左到右线性显示效果
        linearShowEffect(ctx, img);
    };

}, 9999); */
//下面这边关于这个图片，就文字图片的一个这种变化的效果，不能再用这种计时器了，就是跟那个背景淡入、出，应该要放在一起。

function dissolveEffect(ctx, img) {
    var imageData = ctx.createImageData(img.width, img.height);
    var data = imageData.data;

    // 初始化ImageData数据，全部设为透明
    for (var i = 0; i < data.length; i += 4) {
        data[i + 3] = 0;
    }

    // 随机选取一些点设为不透明
    for (var i = 0; i < 1000; i++) {
        var x = Math.floor(Math.random() * img.width * 1);
        var y = Math.floor(Math.random() * img.height * 1);

        var index = (y * img.width + x) * 4;
        data[index + 3] = 255; // 不透明
    }

    ctx.putImageData(imageData, 0, 0);
}

function linearShowEffect(ctx, img) {
    var totalFrames = 60; // 总帧数
    var frame = 0;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 计算每一帧应该显示的宽度
        var widthToShow = (frame / totalFrames) * img.width;

        // 绘制图片的一部分
        ctx.drawImage(img, 0, 0, widthToShow, img.height, 0, 0, widthToShow, img.height);

        frame++;

        if (frame <= totalFrames) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

      // Lottie 动画
      /* const animation = bodymovin.loadAnimation({
        container: document.getElementById('lottieAnimation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'path/to/your/lottie/file.json', // 替换为你的 Lottie JSON 文件的路径
      }); */

    });
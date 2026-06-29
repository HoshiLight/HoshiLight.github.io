const texts = [
    "We say YOSORO ~",
    "We say YOSORO ~"
];

let currentIndex = 0;

function showText(element, text) {
    let index = 0;
    const show = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(show, 100); // 调整文本显示速度
        } else {
            // element.classList.add('show-line-through'); // 文本显示完成后添加删除线效果
        }
    };
    show();
}

const firstTextElement = document.getElementById('textEffect1');
firstTextElement.style.display = 'block';
showText(firstTextElement, texts[currentIndex]);

const showTextButton = document.getElementById('showTextButton');
showTextButton.addEventListener('click', () => {
    const secondTextElement = document.getElementById('textEffect2');
    secondTextElement.style.display = 'block';
    showText(secondTextElement, texts[1]); // 显示第二行文字
    firstTextElement.classList.add('show-line-through'); // 给第一行文字添加删除线
});



var isClear = false; // 初始状态为非清楚状态
			  
function toggleTextColor() {
    var textEffect = document.getElementById('textEffect2');
    isClear = !isClear; // 切换清楚状态

    if (isClear) {
    textEffect.style.color = '#ffffff'; // 切换为白色文字
    } else {
    textEffect.style.color = '#000000'; // 切换为黑色文字
    }
}
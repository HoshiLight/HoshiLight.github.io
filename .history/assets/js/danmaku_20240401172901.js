// 弹幕内容数组，每个弹幕包括中文和日文
var danmakuData = [
    { cn: "回过神来 是已经开始追梦的故事", jp: "気づいたら動き出したストーリー" },
    { cn: "不会放弃! 也绝不想放弃!", jp: "あきらめない！やめたくない！" },
    { cn: "(jump&jump!)更高更高！", jp: "(ジャンプ＆ジャンプ！)高く高く！" },
    
    { cn: "向往着向往着 现实能让想象成真", jp: "憧れて憧れて　想像を形へと変えるレアリテ" },
    
    { cn: "迈出步伐", jp: "歩いていく" },

    { cn: "内心的声音 让它响彻吧", jp: "本当の声を響かせてよほら" },

    { cn: "我们要做的只有梦想吧！", jp: "夢みるしかないでしょ！" },

    { cn: "拿出活力 打起精神向前迈进吧", jp: "気だよ 元気をだしていくよ" },
    { cn: "鼓起勇气 勇气正是万能的High Power", jp: "勇気だよ 勇気は万能ハイパワー" },
    
    { cn: "拜托了！灰姑娘（Cinderella）", jp: "お願い！　シンデレラ" },
    { cn: "梦想只是梦想没有终结", jp: "夢は夢で終われない" },
    { cn: "开始行动吧 为了那闪亮的日子", jp: "動き始めてる　輝く日のために" },
    { cn: "已经开始散发光芒 为了那闪亮的日子", jp: "光り始めてる　輝く日のために" },
    { cn: "注入光芒吧 为了能朝向明天飞奔", jp: "光降り注ぐ　明日へ向かうために" },
    { cn: "一定会实现 向那星星许下的愿望", jp: "叶えるよ　星に願いをかけたなら" },
    



    
    
    
    
    
    
    
    
    // 添加更多弹幕...
];
var danmakuData2 = [
    { cn: "化作光芒吧想就此照亮未来", jp: "" },
    { cn: "光辉自内心满溢而出", jp: "" },
    { cn: "众人都是在烦恼之中 长途跋涉抵达此处", jp: "" },
    
    { cn: "未来预报一片晴朗！", jp: "" },
    { cn: "无论障碍有多高", jp: "" },
    { cn: "也能够越过", jp: "" },
    { cn: "迈步去追赶", jp: "" },
    { cn: "连挫折也化作翅膀", jp: "" },
    { cn: "展翅翱翔 飞吧", jp: "" },
    { cn: "未来预报一片晴朗！", jp: "" },
    { cn: "坚信吧！未来一片晴朗！", jp: "" },
    

    
];
	

// 初始化弹幕墙
function initDanmakuWall() {
    var danmakuWall = document.getElementById('danmakuWall');
    var wallHeight = danmakuWall.offsetHeight; // 获取弹幕墙的高度
    danmakuData.forEach(function(danmaku, index) {
        var danmakuDiv = document.createElement('div');
        danmakuDiv.classList.add('danmaku');
        danmakuDiv.style.top = ((index * 60) % wallHeight) + 'px'; // 计算每条弹幕的垂直位置，并对弹幕墙的高度取余
        danmakuDiv.innerHTML = `<div>${danmaku.cn}</div><div class="sub">${danmaku.jp}</div>`;
        danmakuWall.appendChild(danmakuDiv);
        // 设置动画
        var animationDuration = 10 + index; // 动画持续时间
        danmakuDiv.style.animation = `slideIn ${animationDuration}s linear infinite`;
        // 设置延迟时间
        var delay = Math.random() * 10; // 生成一个0到10之间的随机数
        danmakuDiv.style.setProperty('--delay', delay); // 将随机数赋值给CSS变量
        // 添加CSS动画
        var keyframes = `@keyframes slideIn {
        from { transform: translateX(${danmakuWall.offsetWidth}px); }
        to { transform: translateX(-${danmakuDiv.offsetWidth}px); }
        }`;
        var styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });


    var danmakuWall = document.getElementById('danmakuWall2');
    var wallHeight = danmakuWall.offsetHeight; // 获取弹幕墙的高度
    danmakuData2.forEach(function(danmaku, index) {
        var danmakuDiv = document.createElement('div');
        danmakuDiv.classList.add('danmaku');
        danmakuDiv.style.top = ((index * 60) % wallHeight) + 'px'; // 计算每条弹幕的垂直位置，并对弹幕墙的高度取余
        danmakuDiv.innerHTML = `<div>${danmaku.cn}</div><div class="sub">${danmaku.jp}</div>`;
        danmakuWall.appendChild(danmakuDiv);
        // 设置动画
        var animationDuration = 11 + index; // 动画持续时间
        danmakuDiv.style.animation = `slideIn ${animationDuration}s linear infinite`;
        // 设置延迟时间
        var delay = Math.random() * 11; // 生成一个0到10之间的随机数
        danmakuDiv.style.setProperty('--delay', delay); // 将随机数赋值给CSS变量
        // 添加CSS动画
        var keyframes = `@keyframes slideIn {
        from { transform: translateX(${danmakuWall.offsetWidth}px); }
        to { transform: translateX(-${danmakuDiv.offsetWidth}px); }
        }`;
        var styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
}

// 当页面加载完成时，初始化弹幕墙
window.onload = initDanmakuWall;
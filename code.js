//variable define
//Score
var score = 0;

//scene logs

var scenes = {
    scene1: {
        log1: "Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 ",
        log2: "sample question1 sample question sample question sample question sample question sample question sample question",
        log21: "sample q1a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ",
        log22: "sample q1a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ",
        options: {
            option1: "Option11",
            option2: "Option12"
        }
    },
    scene2: {
        log1: "Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 ",
        log2: "sample question2 sample question sample question sample question sample question sample question sample question",
        log21: "sample q2a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ",
        log22: "sample q2a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ",
        options: {
            option1: "Option21",
            option2: "Option22"
        }
    },
    scene3: {
        log1: "Sample scene3 Sample scene3 Sample scene3 Sample scene3Sample scene3 Sample scene3 Sample scene3 Sample scene3 Sample scene3 Sample scene3 Sample scene3 ",
        log2: "sample question3 sample question sample question sample question sample question sample question sample question",
        log21: "sample q3a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ",
        log22: "sample q3a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ",
        options: {
            option1: "Option31",
            option2: "Option32"
        }
    },
    scene4: {
        log1: "Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4Sample scene4 Sample scene4 ",
        log2: "sample question4 sample question sample question sample question sample question sample question sample question",
        log21: "sample q4a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ",
        log22: "sample q4a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ",
        options: {
            option1: "Option41",
            option2: "Option42"
        }
    },
    scene5: {
        log1: "Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 ",
        log2: "sample question5 sample question sample question sample question sample question sample question sample question",
        log21: "sample q5a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ",
        log22: "sample q5a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ",
        options: {
            option1: "Option51",
            option2: "Option52"
        }
    },
    sceneEnd: "Your day has ended"
};

var currentScene = scenes.scene1.log1;


function reset(){
    $("#home").show();
    $("#play").hide();
    $("#result").hide();
    $("#steps").hide();
    $("#resource").hide();
}
//Page movements
$(".list-start").click(function(){
    $("#home").hide();
    $("#play").show();
    $("#option").hide();
    currentScene = scenes.scene1.log1;
    isLogAnimating = true;
    actLog(currentScene, function () {
        isLogAnimating = false;
    });;
});
$(".list-howto").click(function(){
    $("#home").hide();
    $("#steps").show();
});
$(".list-resource").click(function(){
    $("#home").hide();
    $("#resource").show();
});
$(".btn-back").click(function(){
    reset();
});
//option select
let isLogAnimating = false;

$(".log").click(function(){
    if (!isLogAnimating) {
        isLogAnimating = true;
    if (currentScene === scenes.scene1.log1) {
        currentScene = scenes.scene1.log2;
        actLog(currentScene, function () {
            isLogAnimating = false;
            setOptions(scenes.scene1.options);
        });
    } else if (currentScene === scenes.scene1.log21 || currentScene === scenes.scene1.log22) {
        currentScene = scenes.scene2.log1;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });;
    } else if (currentScene === scenes.scene2.log1) {
        currentScene = scenes.scene2.log2;
        actLog(currentScene, function () {
            isLogAnimating = false;
            setOptions(scenes.scene2.options);
        });
    } else if (currentScene === scenes.scene2.log21 || currentScene === scenes.scene2.log22) {
        currentScene = scenes.scene3.log1;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
    } else if (currentScene === scenes.scene3.log1) {
        currentScene = scenes.scene3.log2;
        actLog(currentScene, function () {
            isLogAnimating = false;
            setOptions(scenes.scene3.options);
        });
    } else if (currentScene === scenes.scene3.log21 || currentScene === scenes.scene3.log22) {
        currentScene = scenes.scene4.log1;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
    } else if (currentScene === scenes.scene4.log1) {
        currentScene = scenes.scene4.log2;
        actLog(currentScene, function () {
            isLogAnimating = false;
            setOptions(scenes.scene4.options);
        });
    } else if (currentScene === scenes.scene4.log21 || currentScene === scenes.scene4.log22) {
        currentScene = scenes.scene5.log1;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
    } else if (currentScene === scenes.scene5.log1) {
        currentScene = scenes.scene5.log2;
        actLog(currentScene, function () {
            isLogAnimating = false;
            setOptions(scenes.scene5.options);
        });
    } else if (currentScene === scenes.scene5.log21 || currentScene === scenes.scene5.log22) {
        currentScene = scenes.sceneEnd;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
    } else if (currentScene === scenes.sceneEnd) {
        $("#play").hide();
        $("#result").show();
        document.getElementById("js-score").innerText = score;
    }
}
});
//option show
function setOptions(options) {
    document.getElementById("option1").innerText = options.option1;
    document.getElementById("option2").innerText = options.option2;
    $("#option").show();
}
$(".option1").click(function(){
    $("#option").hide();
    if (!isLogAnimating) {
        isLogAnimating = true;
    if (currentScene === scenes.scene1.log2) {
        currentScene = scenes.scene1.log21;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 50;
    } else if (currentScene === scenes.scene2.log2) {
        currentScene = scenes.scene2.log21;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 20;
    } else if (currentScene === scenes.scene3.log2) {
        currentScene = scenes.scene3.log21;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 20;
    } else if (currentScene === scenes.scene4.log2) {
        currentScene = scenes.scene4.log21;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 50;
    } else if (currentScene === scenes.scene5.log2) {
        currentScene = scenes.scene5.log21;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 20;
    }
    console.log(score);
}
});
$(".option2").click(function(){
    $("#option").hide();
    if (!isLogAnimating) {
        isLogAnimating = true;
    if (currentScene === scenes.scene1.log2) {
        currentScene = scenes.scene1.log22;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 20;
    } else if (currentScene === scenes.scene2.log2) {
        currentScene = scenes.scene2.log22;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 50;
    } else if (currentScene === scenes.scene3.log2) {
        currentScene = scenes.scene3.log22;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 50;
    } else if (currentScene === scenes.scene4.log2) {
        currentScene = scenes.scene4.log22;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 20;
    } else if (currentScene === scenes.scene5.log2) {
        currentScene = scenes.scene5.log22;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 50;
    }
    console.log(score);
}
});
//log animation

function actLog(currentScene, callback) {
    document.getElementById("log").innerText = "";
    const log = (param) => {
        let el = document.querySelector(param.el);
        let speed = param.speed;
        let string = param.string.split("");
        string.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
                if (index === string.length - 1 && callback) {
                    // 最後の文字が表示されたらコールバックを実行
                    callback();
                }
            }, speed * index);
        });
    };
    log({
        el: "#log",
        string: currentScene,
        speed: 50,
    });
}
//variable define
//Score
var score = 0;

//scene logs

var scenes = {
    scene1: {
        log1: "(one morning, you are rushing downstairs, You are almost about to be late for the bus. You reach down and sees your drive waiting for you)",
        log2: "You are quite late today, what happened",
        log21: "Oh well, you got to be more careful next time!",
        log22: "Well, whatever it is. Don't be late next time.",
        options: {
            option1: "Sorry miss, I overslept and was rushing.",
            option2: "(You don't say anything)"
        }
    },
    scene2: {
        log1: "(Due to heavy traffic, you are 5 minutes late to class. When you enter the class, your teacher asks you why)",
        log2: "Good morning. May I ask you why are you late for my class?",
        log21: "What kind of manner is that to your teacher!? I will need you to see me after school.",
        log22: "Oh, if so it is fine. Thanks for letting me know.",
        options: {
            option1: "Sorry teacher! never mind!",
            option2: "Sorry teacher, my bus was stuck in the traffic jam"
        }
    },
    scene3: {
        log1: "(It's lunch time. You are in the food court, trying to order your meal.)",
        log2: "Hi, what do you want?",
        log21: "Sure! here is you meal, enjoy!",
        log22: "ok, here is your meal (...does this kid don't have manners?)",
        options: {
            option1: "Can I have the daily set with milo?",
            option2: "daily set, milo"
        }
    },
    scene4: {
        log1: "(During lesson, you suddenly feel the urge to go to the toilet.",
        log2: "(In a polite way, tell the teacher you want to go to toilet)",
        log21: "Sure, take the pass and go",
        log22: "...Sure (This student... there is a need for him to know manners)",
        options: {
            option1: "Teacher, may I go to the washroom?",
            option2: "Teacher, can I go toilet?"
        }
    },
    scene5: {
        log1: "(After school, your friend asks you to play basketball with him. However you need to go back to home now.)",
        log2: "Hey, we are going to have a match now, you want to join?",
        log21: "Oh... Ok sure, if so lets play next weekend. (Why is he so dry to me? did I do anything to him?)",
        log22: "OK sure, if so lets play next week! Have a nice weekend!",
        options: {
            option1: "Nah",
            option2: "I would like to, but sorry I need to go back home"
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
    $("#scenes").addClass('bgsc1');
    $("#scenes").removeClass('bgsc21');
    $("#scenes").removeClass('bgsc22');
    $("#scenes").removeClass('bgsc31');
    $("#scenes").removeClass('bgsc32');
    $("#scenes").removeClass('bgsc51');
    $("#scenes").removeClass('bgsc52');
}
//Page movements
$(".list-start").click(function(){
    $("#home").hide();
    $("#play").show();
    $("#option").hide();
    score = 0;
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
        $("#scenes").addClass('bgsc21');
        $("#scenes").removeClass('bgsc1');
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
        $("#scenes").addClass('bgsc31');
        $("#scenes").removeClass('bgsc21');
        $("#scenes").removeClass('bgsc22');
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
        $("#scenes").addClass('bgsc21');
        $("#scenes").removeClass('bgsc31');
        $("#scenes").removeClass('bgsc32');
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
        $("#scenes").addClass('bgsc51');
        $("#scenes").removeClass('bgsc21');
        $("#scenes").removeClass('bgsc22');
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
        $("#scenes").addClass('bgsc22');
        $("#scenes").removeClass('bgsc21');
    } else if (currentScene === scenes.scene3.log2) {
        currentScene = scenes.scene3.log21;
        actLog(currentScene, function () {
            isLogAnimating = false;
        });
        score += 20;
        $("#scenes").addClass('bgsc32');
        $("#scenes").removeClass('bgsc31');
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
        $("#scenes").addClass('bgsc52');
        $("#scenes").removeClass('bgsc51');
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
        $("#scenes").addClass('bgsc22');
        $("#scenes").removeClass('bgsc21');
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
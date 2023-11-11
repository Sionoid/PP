//variable define
//Scene count
var sceneCount = 1;
//Score
var score = 0;

//scene logs
var scene1log1 = "Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 Sample scene1 "
var scene1log2 = "sample question1 sample question1 sample question1 sample question1 sample question1 sample question1 sample question1";
var scene1log21 = "sample q1a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ";
var scene1log22 = "sample q1a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ";
var scene2log1 = "Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 Sample scene2 "
var scene2log2 = "sample question2 sample question2 sample question2 sample question2 sample question2 sample question2 sample question2";
var scene2log21 = "sample q2a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ";
var scene2log22 = "sample q2a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ";
var scene3log1 = "Sample scene3 Sample scene3 Sample scene3 Sample scene3Sample scene3 Sample scene3 Sample scene3 Sample scene3 Sample scene3 Sample scene3 Sample scene3 "
var scene3log2 = "sample question3 sample question sample question sample question sample question sample question sample question";
var scene3log21 = "sample q3a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ";
var scene3log22 = "sample q3a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ";
var scene4log1 = "Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4 Sample scene4Sample scene4 Sample scene4 "
var scene4log2 = "sample question4 sample question sample question sample question sample question sample question sample question";
var scene4log21 = "sample q4a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ";
var scene4log22 = "sample q4a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ";
var scene5log1 = "Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 Sample scene5 "
var scene5log2 = "sample question5 sample question sample question sample question sample question sample question sample question";
var scene5log21 = "sample q5a1 sample a1 sample a1 sample a1 sample a1 sample a1 sample a1 ";
var scene5log22 = "sample q5a2 sample a2 sample a2 sample a2 sample a2 sample a2 sample a2 ";
var sceneEnd = "Your day has ended"

var option11 = "Option11"
var option12 = "Option12"
var option21 = "Option21"
var option22 = "Option22"
var option31 = "Option31"
var option32 = "Option32"
var option41 = "Option41"
var option42 = "Option42"
var option51 = "Option51"
var option52 = "Option52"

var sceneNumlogNum = scene1log1;


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
    sceneNumlogNum = scene1log1;
    actLog(sceneNumlogNum);
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
$(".log").click(function(){
    if (sceneNumlogNum = scene1log1) {
        sceneNumlogNum = scene1log2;
        actLog(sceneNumlogNum);
        document.getElementById("option1").innerText = option11;
        document.getElementById("option2").innerText = option12;
        $("#option").show();
        console.log(sceneNumlogNum);
    }else if (sceneNumlogNum = scene1log21) {
        console.log(sceneNumlogNum);
        sceneNumlogNum = scene2log1;
        actLog(sceneNumlogNum);
    }else if (sceneNumlogNum = scene1log22){
        console.log(sceneNumlogNum);
        sceneNumlogNum = scene2log1;
        actLog(sceneNumlogNum);
    }else if(sceneNumlogNum = scene2log1) {
        sceneNumlogNum = scene2log2;
        actLog(sceneNumlogNum);
        document.getElementById("option1").innerText = option21;
        document.getElementById("option2").innerText = option22;
        $("#option").show();
    }else if (sceneNumlogNum = scene2log21 || scene2log22) {
        sceneNumlogNum = scene3log1;
        actLog(sceneNumlogNum);
    }else if (sceneNumlogNum == scene3log1) {
        sceneNumlogNum = scene3log2;
        actLog(sceneNumlogNum);
        document.getElementById("option1").innerText = option31;
        document.getElementById("option2").innerText = option32;
        $("#option").show();
    }else if (sceneNumlogNum == scene3log21 || sceneNumlogNum == scene3log22) {
        sceneNumlogNum = scene4log1;
        actLog(sceneNumlogNum);
    }else if (sceneNumlogNum == scene4log1) {
        sceneNumlogNum = scene4log2;
        actLog(sceneNumlogNum);
        document.getElementById("option1").innerText = option41;
        document.getElementById("option2").innerText = option42;
        $("#option").show();
    }else if (sceneNumlogNum == scene4log21 || sceneNumlogNum == scene4log22) {
        sceneNumlogNum = scene5log1;
        actLog(sceneNumlogNum);
    }else if (sceneNumlogNum == scene5log1) {
        sceneNumlogNum = scene5log2;
        actLog(sceneNumlogNum);
        document.getElementById("option1").innerText = option51;
        document.getElementById("option2").innerText = option52;
        $("#option").show();
    }else if (sceneNumlogNum == scene5log21 || sceneNumlogNum == scene5log22) {
        sceneNumlogNum = sceneEnd;
        actLog(sceneNumlogNum);
        $("#play").hide();
        $("#result").show();
        document.getElementById("js-score").innerText = score;
    }
});
//option show
$(".option1").click(function(){
    if (sceneNumlogNum = scene1log2) {
        $("#option").hide();
        sceneNumlogNum = scene1log21;
        actLog(sceneNumlogNum);
        score = score + 50;
        console.log(score);
    }else if (sceneNumlogNum = scene2log2) {
        $("#option").hide();
        sceneNumlogNum = scene2log21;
        actLog(sceneNumlogNum);
        score = score + 20;
        console.log(score);
    }else if (sceneNumlogNum = scene3log2) {
        $("#option").hide();
        sceneNumlogNum = scene3log21;
        actLog(sceneNumlogNum);
        score = score + 20;
        console.log(score);
    }else if (sceneNumlogNum = scene4log2) {
        $("#option").hide();
        sceneNumlogNum = scene4log21;
        actLog(sceneNumlogNum);
        score = score + 50;
        console.log(score);
    }else if (sceneNumlogNum = scene5log2) {
        $("#option").hide();
        sceneNumlogNum = scene5log21;
        actLog(sceneNumlogNum);
        score = score + 20;
        console.log(score);
    }
});

$(".option2").click(function(){
    if (sceneNumlogNum = scene1log2) {
        $("#option").hide();
        sceneNumlogNum = scene1log22;
        console.log(sceneNumlogNum)
        actLog(sceneNumlogNum);
        score = score + 20;
        console.log(score);
    }else if (sceneNumlogNum = scene2log2) {
        $("#option").hide();
        sceneNumlogNum = scene2log22;
        actLog(sceneNumlogNum);
        score = score + 50;
        console.log(score);
    }else if (sceneNumlogNum = scene3log2) {
        $("#option").hide();
        sceneNumlogNum = scene3log22;
        actLog(sceneNumlogNum);
        score = score + 50;
        console.log(score);
    }else if (sceneNumlogNum = scene4log2) {
        $("#option").hide();
        sceneNumlogNum = scene4log22;
        actLog(sceneNumlogNum);
        score = score + 20;
        console.log(score);
    }else if (sceneNumlogNum = scene5log2) {
        $("#option").hide();
        sceneNumlogNum = scene5log22;
        actLog(sceneNumlogNum);
        score = score + 50;
        console.log(score);
    }
});

//log animation

function actLog(sceneNumlogNum){
    document.getElementById("log").innerText = "";
    const log = (param) => {

        let el = document.querySelector(param.el);
        let speed = param.speed;
        let string = param.string.split("");
        string.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
            }, speed * index);
        });
    };
    log({
        el: "#log", //要素
        string: sceneNumlogNum, //文字列
        speed: 50 //速度
    });    
}

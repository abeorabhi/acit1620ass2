/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
var hairnum = 1,
    eyesnum = 1,
    nosenum = 1,
    mouthnum = 1;

hair.addEventListener("click", function(){
    hairnum++;
    if (hairnum > 3) {
        hairnum = 1;
    }
    hair.src = "img/hair"+hairnum+".png";
});

eyes.addEventListener("click", function(){
    eyesnum++;
    if (eyesnum > 3) {
        eyesnum = 1;
    }
    eyes.src = "img/eyes"+eyesnum+".png";
});

nose.addEventListener("click", function(){
    nosenum++;
    if (nosenum > 3) {
        nosenum = 1;
    }
    nose.src = "img/nose"+nosenum+".png";
});

mouth.addEventListener("click", function(){
    mouthnum++;
    if (mouthnum > 3) {
        mouthnum = 1;
    }
    mouth.src = "img/mouth"+mouthnum+".png";
});
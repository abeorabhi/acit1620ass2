var colorinp = document.getElementById("colorinp"),
    preview = document.getElementById("preview"),
    number = document.getElementById("numbutt"),
    range = document.getElementById("rangebutt"),
    hairinp = document.getElementById("hairinp"),
    eyesinp = document.getElementById("eyesinp"),
    noseinp = document.getElementById("noseinp"),
    mouthinp = document.getElementById("mouthinp"),
    plus = document.getElementById("plusbutt"),
    disp = document.getElementById("display"),
    rand = document.getElementById("randombutt"),
    timer = null;

function createFace() {
    var ndiv = document.createElement("div");
    ndiv.style.width = "100px";
    ndiv.style.height = "100px";
    ndiv.style.display = "inline-block";
    ndiv.style.left = "0px";
    ndiv.style.position = "relative";
    ndiv.style.margin = "2px";
    ndiv.style.backgroundColor = preview.style.backgroundColor;
    var himg = document.createElement("img");
    himg.style.left = "0px";
    himg.style.right = "0px";
    himg.style.margin = "auto";
    himg.style.width = hair.style.width;
    himg.style.height = hair.style.height;
    himg.style.top = hair.style.top;
    himg.style.position = "absolute";
    himg.src = hair.src;
    var eimg = document.createElement("img");
    eimg.style.left = "0px";
    eimg.style.right = "0px";
    eimg.style.margin = "auto";
    eimg.style.width = eyes.style.width;
    eimg.style.height = eyes.style.height;
    eimg.style.top = eyes.style.top;
    eimg.style.position = "absolute";
    eimg.src = eyes.src;
    var nimg = document.createElement("img");
    nimg.style.left = "0px";
    nimg.style.right = "0px";
    nimg.style.margin = "auto";
    nimg.style.width = nose.style.width;
    nimg.style.height = nose.style.height;
    nimg.style.top = nose.style.top;
    nimg.style.position = "absolute";
    nimg.src = nose.src;
    var mimg = document.createElement("img");
    mimg.style.left = "0px";
    mimg.style.right = "0px";
    mimg.style.margin = "auto";
    mimg.style.width = mouth.style.width;
    mimg.style.height = mouth.style.height;
    mimg.style.top = mouth.style.top;
    mimg.style.position = "absolute";
    mimg.src = mouth.src;
    
    ndiv.appendChild(himg);
    ndiv.appendChild(eimg);
    ndiv.appendChild(nimg);
    ndiv.appendChild(mimg);
    
    disp.className = "container-fluid";
    ndiv.className = "col-sm-4 col-md-6 col-lg-8 col-xl-12";
    disp.appendChild(ndiv);
}
    
function randomFace() {
    var num = Math.floor((Math.random() * 3) + 1);
    hair.src = "img/hair"+num+".png";
    eyes.src = "img/eyes"+num+".png";
    nose.src = "img/nose"+num+".png";
    mouth.src = "img/mouth"+num+".png";
    
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    randcolor = "#" + ("000000" + hex.toString(16)).substr(-6);
    preview.style.backgroundColor = randcolor;
    colorinp.value = randcolor;
    
    var hnum = Math.floor((Math.random() * 70) + 1);
    hair.style.width = hnum+"%";
    hairinp.value = hnum;
    var eynum = Math.floor((Math.random() * 40) + 1);
    eyes.style.width = eynum+"%";
    eyesinp.value = eynum;
    var nnum = Math.floor((Math.random() * 30) + 1);
    nose.style.width = nnum+"%";
    noseinp.value = nnum;
    var mnum = Math.floor((Math.random() * 35) + 1);
    mouth.style.width = mnum+"%";
    mouthinp.value = mnum;
}

function changeType(type) {
    hairinp.type = type;
    eyesinp.type = type;
    noseinp.type = type;
    mouthinp.type = type;
}

colorinp.addEventListener("change", function(){
    preview.style.backgroundColor = colorinp.value;
});

number.addEventListener("click", function(){
    changeType("number");
});

range.addEventListener("click", function(){
    changeType("range");
});

hairinp.addEventListener("change", function(){
    hair.style.width = hairinp.value + "%";
});

eyesinp.addEventListener("change", function(){
    eyes.style.width = eyesinp.value + "%";
});

noseinp.addEventListener("change", function(){
    nose.style.width = noseinp.value + "%";
});

mouthinp.addEventListener("change", function(){
    mouth.style.width = mouthinp.value + "%";
});

plus.addEventListener("click", function(){
    createFace();
});

rand.addEventListener("click", function(){
    randomFace();
});

document.getElementById("autobutt").addEventListener("click", function(){
    if (timer == null) {
        timer = setInterval(function(){
            randomFace();
            createFace();
        }, 500);
    }
});

document.getElementById("stopbutt").addEventListener("click", function(){
    clearInterval(timer);
    timer = null;
});
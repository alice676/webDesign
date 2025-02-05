var d = document;
var button = d.getElementById("button");
var pwd = d.getElementById("pwd");
var tips = d.getElementById("tips");
var body = d.getElementsByClassName("body");
button.addEventListener("mousemove", function (e) {
    //產生min到max之間的亂數
    // Math.floor(Math.random() * (max - min + 1)) + min;
    if (pwd.value == "") {
        var max_w = 400;
        var min_w = 30;
        var max_h = 190;
        var min_h = 0;
        var a = Math.floor(Math.random() * (max_w - min_w + 1)) + min_w;
        button.style.marginLeft = a + "px";
        var b = Math.floor(Math.random() * (max_h - min_h + 1)) + min_h;
        button.style.marginTop = b + "px";
        // console.log("moveIn");
        button.style.backgroundColor = "red";
        tips.textContent = "請輸入密碼!!!";
    }
    else {
        tips.textContent = "";
        button.style.backgroundColor = "rgb(31, 103, 237)";
        return;
    }
});

button.addEventListener("click", function (e) {
    alert("登入成功");
});
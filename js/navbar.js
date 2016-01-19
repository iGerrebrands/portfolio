(function(){
    "use strict";
    var active = 0;
    var navbar = document.querySelectorAll("nav a");
    var articles = document.querySelectorAll("article");

    var minimizer = {
        text: "-",
        desc: "Minimize",
        minimized: false
    };
    var minimize = function() {
        for(var i=0; i < articles.length; i++){
            if(i!==active) {
                articles[i].style.display = "none";
            } else {
                articles[i].style.display = "block";
            }
        }
    };

    var maximize = function() {
        for(var i=0; i < articles.length; i++){
            articles[i].style.display = "block";
        }
    };

    for(var i=0; i<navbar.length-1; i++){
        navbar[i].onclick = function(e) {
            var href = e.path[1].attributes[0].nodeValue.replace('#', '');
            for(var i=0; i < articles.length; i++) {
                if(articles[i].getAttribute("id") === href){
                    active = i;
                    minimize();
                    break;
                }
            }
        };
    }

    navbar[navbar.length-1].onmouseover = function(){
        navbar[navbar.length-1].innerHTML = minimizer.desc;
    };

    navbar[navbar.length-1].onmouseout = function(){
        navbar[navbar.length-1].innerHTML = minimizer.text;
    };

    navbar[navbar.length-1].onclick = function() {
        minimizer.minimized = !minimizer.minimized;
        if(minimizer.minimized){
            minimizer.text = "+";
            minimizer.desc = "Maximize";
            minimize();
        } else {
            minimizer.text = "-";
            minimizer.desc = "Minimize";
            maximize();
        }
        navbar[navbar.length-1].innerHTML = minimizer.desc;
    };
})();
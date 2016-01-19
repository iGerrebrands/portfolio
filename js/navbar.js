(function(){
    "use strict";
    var active = null;
    var navbar = document.querySelectorAll("nav a");
    var articles = document.querySelectorAll("article");

    var minimizer = {
        text: "-",
        desc: "Minimize",
        minimized: false
    };

    var minimize = function() {
        if(!minimizer.minimized) return;
        _.each(articles, function(article) {
            if(article !== active) {
                article.style.display = "none";
            } else {
                article.style.display = "block";
            }
        });
        //for(var i=0; i < articles.length; i++){
        //    if(i!==active) {
        //        articles[i].style.display = "none";
        //    } else {
        //        articles[i].style.display = "block";
        //    }
        //}
    };

    var maximize = function() {
        _.each(articles, function(article) {
             article.style.display = "block";
        });
        //for(var i=0; i < articles.length; i++){
        //    articles[i].style.display = "block";
        //}
    };

    _.each(navbar, function(a) {
        a.onclick = function(e) {
            var href = e.path[1].attributes[0].nodeValue.replace('#', '');
            _.every(articles, function(article) {
               if(article.getAttribute("id") === href){
                   active = article;
                   minimize();
               }
                return article.getAttribute("id") !== href;
            });
        };
    });

    //for(var i=0; i<navbar.length-1; i++){
    //    navbar[i].onclick = function(e) {
    //        var href = e.path[1].attributes[0].nodeValue.replace('#', '');
    //        for(var i=0; i < articles.length; i++) {
    //            if(articles[i].getAttribute("id") === href){
    //                active = articles[i];
    //                minimize();
    //                break;
    //            }
    //        }
    //    };
    //}

    //The code below is for the minimize/maximize button
    //navbar[navbar.length-1] because the button should always be the last one in the nav
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
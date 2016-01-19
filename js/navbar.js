(function(){
    "use strict";
    //Lists of elements needed for this peace of code
    //navbar is used to get all the <a></a> elements in the nav
    var navbar = document.querySelectorAll("nav a");

    //articles is used to get all the <article></article> elements
    var articles = document.querySelectorAll("article");

    //Holds the active element its used for the minimizer so it does not hide the active element
    var activeArticle = articles[0] !== 'undefined' ? articles[0] : null;

    //Minimizer object to hold default values for the minimizer
    var minimizer = {
        text: "-",
        desc: "Minimize",
        minimized: false
    };

    //Hiding every article if not active
    var minimize = function() {
        if(!minimizer.minimized) return;
        _.each(articles, function(article) {
            if(article !== activeArticle) {
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

    //Puts every article back to display block
    var maximize = function() {
        _.each(articles, function(article) {
             article.style.display = "block";
        });
        //for(var i=0; i < articles.length; i++){
        //    articles[i].style.display = "block";
        //}
    };

    //Sets the given element to class active and removes the class active from the old element with an active class
    var setActiveNav = function(elem) {
        _.each(navbar, function(a) {
            if(a.className === "active"){
                a.className = "";
            }
            if(a === elem){
                a.className = "active";
            }
        });
    };

    //Sets a onclick event listener to all the navigation items
    _.each(navbar, function(a) {
        a.onclick = function(e) {
            var href = e.path[1].attributes[0].nodeValue.replace('#', '');
            _.every(articles, function(article) {
               if(article.getAttribute("id") === href){
                   setActiveNav(a);
                   activeArticle = article;
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
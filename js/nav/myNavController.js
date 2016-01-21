portfolioApp
    .controller('navCtrl', function(
        $scope
    ){
        $scope.nav = {
            links: [
                {name:"About", href:"#about", active:true},
                {name:"Skills", href:"#skills", active:false},
                {name:"Projects", href:"#projects", active:false},
                {name:"Contact", href:"#contact", active:false}
            ],
            minimizer: {
                minimized: false,
                min: {
                    text: "-",
                    desc: "Minimize"
                },
                max: {
                    text: "+",
                    desc: "Maximize"
                },
                state: "-"

            }
    };

        //Function that runs when clicked on a navigation link
        $scope.activate = function(element){
            _.each($scope.nav.links, function(link) {
                if(link.active) link.active = false;
                if(element === link){
                    link.active = true;
                }
            })
        };

        //When clicked on minimizer
        $scope.toggleMinimizerState = function() {
            var minimizer = $scope.nav.minimizer;
            if(!minimizer.minimized){
                minimizer.state = minimizer.state === minimizer.min.text ? minimizer.min.desc : minimizer.min.text;
            } else {
                minimizer.state = minimizer.state === minimizer.max.text ? minimizer.max.desc : minimizer.max.text;
            }
        };

        $scope.toggleMinimizerArticles = function() {
            var minimizer = $scope.nav.minimizer;
            //if not minimized minimize all articles
            if(!minimizer.minimized){
                minimize();
            } else {
                maximize();
            }
            minimizer.minimized = !minimizer.minimized;
            //setting the state so the text will change when clicked
            minimizer.state = minimizer.minimized ? minimizer.max.desc : minimizer.min.desc;
        };

        var getActiveNavLink = function() {
            var activeLink = null;
            _.every($scope.nav.links, function(l) {
                if(l.active) {
                    activeLink = l;
                }
                return !l.active;
            });
            return activeLink;
        };

        var minimize = function() {
            _.each(document.querySelectorAll("article"), function(article) {
                if(getActiveNavLink().href.replace("#", "") !== article.id){
                    article.style.display = "none";
                } else {
                    article.style.display = "block";
                }
            });
        };

        var maximize = function() {
            _.each(document.querySelectorAll("article"), function(article) {
                article.style.display = "block";
            });
        };
    });
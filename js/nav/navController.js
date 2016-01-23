(function(){
    portfolioApp
        .controller('navCtrl', function(
            $scope,
            NAVIGATION
        ){
            $scope.nav = NAVIGATION;
            $scope.boolChangeClass = false;

            //Makes the link where is clicked on active (makes it red)
            $scope.activate = function(element){
                _.each(NAVIGATION.links, function(link) {
                    if(link.active) link.active = false;
                    if(element === link){
                        link.active = true;
                    }
                });
            };
        });
})();

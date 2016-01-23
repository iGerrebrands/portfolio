(function(){
    portfolioApp
        .controller('navCtrl', function(
            $scope,
            NAVIGATION,
            navigationService
        ){
            $scope.nav = NAVIGATION;
            $scope.boolChangeClass = false;

            $scope.activate = function(element){
                navigationService.activate(element);
            }
        });
})();

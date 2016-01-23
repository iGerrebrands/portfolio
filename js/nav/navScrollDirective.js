(function(){
    portfolioApp
        .directive("scroll", function(
            $window
        ){
            return function(scope){
                angular.element($window).bind("scroll", function() {
                    scope.boolChangeClass = this.pageYOffset >= 130;
                    scope.$apply();
                });
            };
        });
})();
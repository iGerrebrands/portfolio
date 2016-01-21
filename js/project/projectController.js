portfolioApp
    .controller('projectCtrl', function(
        $scope,
        PROJECTS
    ) {
        $scope.projects = PROJECTS;
});
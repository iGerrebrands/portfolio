myPortfolioApp.controller('myProjectCtrl', function($scope) {
    $scope.projects = [
        {name:"Techniek Innovatiehuis", date:["Nov 2015","Dec 2015"], img:"images/techniekinnovatiehuis.png",
            href:"http://www.techniekinnovatiehuis.nl", desc:"Some bullshit"},

        {name:"Example project1", date:["Nov 2015","Dec 2015"], img:"images/project-placeholder.jpg",
            href:"http://www.techniekinnovatiehuis.nl", desc:"Some bullshit"}
    ];
});
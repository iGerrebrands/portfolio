myPortfolioApp.controller('myProjectCtrl', function($scope) {
    $scope.projects = [
        {name:"Techniek Innovatiehuis", date:["Nov 2015","Dec 2015"], img:"image/techniekinnovatiehuis.png",
            href:"http://www.techniekinnovatiehuis.nl", desc:"Some bullshit"},

        {name:"Example project1", date:["Nov 2015","Dec 2015"], img:"image/project-placeholder.jpg",
            href:"http://www.techniekinnovatiehuis.nl", desc:"Some bullshit"},

        {name:"Example project2", date:["Nov 2015", "Dec 2015"], img:"image/project-placeholder2.jpg",
            href:"http://www.google.nl", desc:"Some bullshit"}
    ];
});
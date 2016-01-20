myPortfolioApp.controller('myProjectCtrl', function($scope) {
    $scope.projects = [
        {name:"Techniek Innovatiehuis", date:["Nov 2015","Dec 2015"], img:"image/techniekinnovatiehuis.png",
            href:"http://www.techniekinnovatiehuis.nl", desc:"We did create a website for the Techniek Innovatiehuis project, this is a project Roc Mondriaan is working on. " +
                "They want to inspire people to work together on projects. Techniek Innovatiehuis is going to make that possible. " +
                "We had the job to create the website and the CMS (Content Management System). They are using this website for publicity."},

        {name:"Example project1", date:["Nov 2015","Dec 2015"], img:"image/project-placeholder.jpg",
            href:"http://www.techniekinnovatiehuis.nl", desc:"A description."},

        {name:"Example project2", date:["Nov 2015", "Dec 2015"], img:"image/project-placeholder2.jpg",
            href:"http://www.google.nl", desc:"A description.."}
    ];
});
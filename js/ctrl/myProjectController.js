myPortfolioApp
    .controller('myProjectCtrl', function($scope) {
        $scope.projects = [
            {name:"Techniek Innovatiehuis", date:["Nov 2015","Dec 2015"], img:"image/techniekinnovatiehuis.png",
                href:"http://www.techniekinnovatiehuis.nl", desc:"We did create a website for the Techniek Innovatiehuis project, this is a project Roc Mondriaan is working on. " +
                    "They want to inspire people to work together on projects. Techniek Innovatiehuis is going to make that possible. " +
                    "We had the job to create the website and the CMS (Content Management System). They are using this website for publicity."},

            {name:"Android schedule app", date:["Jan 2015","Mar 2015"], img:"image/project-rooster-app.jpg",
                href:"", desc:"A classmate and I developed a schedule app for android, it was our school project. " +
                        "I made half of the front-end my classmate made the half of the front-end and all of the back-end. " +
                        "In the app you get a overview of your schedule and you can see an overview of all the hours you are absent or present."},
        ];
    });
myPortfolioApp
    .controller('mySkillCtrl', function($scope) {
        var skillExperience = {
            good: {text: "GOOD", style: "positive-green"},
            moderate: {text: "MODERATE", style: "moderate-yellow"},
            basic: {text: "BASIC", style: "basic-blue"}
        };

        $scope.skills = [
            {skill: "HTML5", exp: skillExperience.good},
            {skill: "CSS3", exp: skillExperience.moderate},
            {skill: "Javascript", exp: skillExperience.good},
            {skill: "NodeJS", exp: skillExperience.good},
            {skill: "Coffeescript", exp: skillExperience.good},
            {skill: "PHP", exp: skillExperience.moderate},
            {skill: "Java", exp: skillExperience.good},
            {skill: "C#", exp: skillExperience.moderate},
            {skill: "Python", exp: skillExperience.basic}
        ];
    });
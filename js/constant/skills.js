(function() {
    portfolioApp
        .constant('SKILLS', (function() {
                return [
                    {name: "HTML5", experience: {text: "GOOD", style: "positive-green"}},
                    {name: "CSS3", experience: {text: "MODERATE", style: "moderate-yellow"}},
                    {name: "Javascript", experience: {text: "GOOD", style: "positive-green"}},
                    {name: "NodeJS", experience: {text: "MODERATE", style: "moderate-yellow"}},
                    {name: "Coffeescript", experience: {text: "GOOD", style: "positive-green"}},
                    {name: "PHP", experience: {text: "MODERATE", style: "moderate-yellow"}},
                    {name: "Java", experience: {text: "GOOD", style: "positive-green"}},
                    {name: "C#", experience: {text: "GOOD", style: "positive-green"}},
                    {name: "Python", experience: {text: "BASIC", style: "basic-blue"}}
                ];
            })()
        );
})();
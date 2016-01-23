(function() {
    portfolioApp
        .constant('NAVIGATION', {
            links: [
                {name:"About", href:"#about", active:true},
                {name:"Skills", href:"#skills", active:false},
                {name:"Projects", href:"#projects", active:false},
                {name:"Contact", href:"#contact", active:false}
            ]
        });
})();
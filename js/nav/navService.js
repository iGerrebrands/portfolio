portfolioApp
    .service('navigationService', function(
        NAVIGATION
    ){
        //Makes the link where is clicked on active (makes it red)
       this.activate = function(element){
           _.each(NAVIGATION.links, function(link) {
               if(link.active) link.active = false;
               if(element === link){
                   link.active = true;
               }
           });
       };
    });
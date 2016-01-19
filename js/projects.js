(function() {
    var Project = function(name, date, img, href, desc) {
        this.name = name;
        this.date = date;
        this.img = img;
        this.href = href;
        this.desc = desc;
    };

    var projectDOM = {
        parent: document.querySelector("#projects")
    };

    var projects = [
        new Project("Techniek Innovatiehuis", ["Nov 2015", "Dec 2015"], "images/techniekinnovatiehuis.png", "http://www.techniekinnovatiehuis.nl",
            "We did create a website for the Techniek Innovatiehuis, this is a project from Roc Mondriaan they want to use this website to publish articles about the project. " +
            "We had the job to make the website with a CMS (content management system) so the client (Roc Mondriaan) can edit, add or delete content."),

        new Project("Example project 1", ["Nov 2015", "Dec 2015"], "images/project-placeholder.jpg", "http://www.techniekinnovatiehuis.nl",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
            "Aenean commodo ligula eget dolor. Aenean massa. " +
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
            "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. " +
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. " +
            "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
            "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. " +
            "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."),

        new Project("Example project 2", ["Nov 2015", "Dec 2015"], "images/project-placeholder2.jpg", "http://www.techniekinnovatiehuis.nl",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
            "Aenean commodo ligula eget dolor. Aenean massa. " +
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
            "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. " +
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. " +
            "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
            "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. " +
            "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.")
    ];

    var drawProjects = function() {
        projects.forEach(function(p) {
            var container = document.createElement("section");
            container.className += "project";
            var header = document.createElement("header");
            var title = document.createElement("h3");
            title.innerHTML = p.name + " <sup>" + p.date[0] + " - " + p.date[1] + "</sup>";
            header.appendChild(title);
            container.appendChild(header);
            var a = document.createElement("a");
            a.href = p.href;
            a.target = "_blank";
            var img = document.createElement("img");
            img.src = p.img;
            a.appendChild(img);
            container.appendChild(a);
            var description = document.createElement("p");
            description.innerHTML = p.desc;
            container.appendChild(description);
            projectDOM.parent.appendChild(container);
        });
    };

    drawProjects();
})();

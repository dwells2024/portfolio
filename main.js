var projects = [
    {
        name: "Skyline Physicians Patient Database",
        date: "June 2022 - August 2022",
        img: "imgs/instraai.jpg",
        alt: "Picture of a particpatory budgeting caucus session at Northwestern University",
        description: "As part of a summer internship at Instra.AI, I worked as a front end developer, working on implementing parts of a patient database for Skyline Physicians."
    },
    {
        name: "Participatory Budgeting RAP Team",
        date: "January 2022 - June 2022",
        img: "imgs/caucus.png",
        alt: "Students discuss policy ideas at a participatory budgeting caucus at Northwestern University.",
        description: "I was a member of the Civic Engagement Progam's RAP team. We worked on creating a framework for canvassing residents for participatory budgeting. Our plan is currently being implemented as part of the City of Evanston's new participatory budgeting process."
    },
    {
        name: "The Aquasystem",
        date: "January 2021 - March 2021",
        img: "imgs/aquasyste.jpg",
        alt: 'Picture of a prototype for The Aquasystem. A box frame with rows of re-used water bottles serving as the floatation device and planting area for native plants.',
        description: "As part of Northwestern's Design Thinking and Communication Course, I worked with a team to create a floating garden for native plants that the Friends of the Chicago River could attach to the seawall. The design is a hydroponic bed with rows of re-used plastic bottles that serve as the floatation device."
    },
    {
        name: "The Happier Tail",
        date: "January 2021 - March 2021",
        img: "imgs/happy_tail.png",
        alt: "Sketch of the final design of The Happier Tail, a sleeve covering the tail secured around the dog's hind legs.",
        description: "As part of Northwestern's Design Thinking and Communication Course, I worked with a team to develop a solution for Happy Tail Syndrome for a local veterinarian. The product is a tail sleeve designed to reduce the risk of re-injury of a tail due to excessive wagging."
    }

]

function createProjects(projects, id){
    let selector = document.querySelector(id);
    if (selector){
        if(projects instanceof Array){
            for (let project of projects){
                let index = projects.indexOf(project);
                let html = `
                    <div class="project-name">${project.name}</div>
                    <img class="project-img" id="pi-${index.toString()}" src="${project.img}" alt="${project.alt}")></img>
                    <div class="project-desc hidden" id="pd-${index.toString()}">${project.description}</div>
                `

                let container = document.createElement("div");
                container.className = "project";
                container.innerHTML = html;
                container.onclick = function () {toggleProject(index)};
                // container.tabIndex = index;
                selector.append(container);
            }
        }
    }
}

function toggleProject(index) {
    let image = document.querySelector("#pi-"+ index.toString());
    let description = document.querySelector("#pd-"+ index.toString());

    if (image && description) {
        image.classList.toggle("hidden");
        description.classList.toggle("hidden");
    }
}
db = db.getSiblingDB('tuning-system');

db.users.insertMany([
    {
        name:"Admin", 
        email:"admin@admin.com", 
        roles: [
            "Admin",
            "User"
        ],
        salt:"Zc63TBOOAdB9rqNcbW7b7QO+4QGUzZOAbx7G+DFxrsC8vYFxYMr88KoeIz/hFy34orp1bdbozEZ0kub4urzqKQriaNEpbrVPVkagVSfSKQQttEaC03oxO7HSQQn/ZF1TIduGsqcHNjB+IUouz775zRlBB2JWnbgc/LsqUraARfE=",
        hashedPass : "05e944fbf2bc252bdfca5805e325b13ede398cf58b5407f2408f9a1341d53537"
    },
    {
        name:"venci", 
        email:"venci@abv.bg", 
        roles: [
            "User"
        ],
        salt:"FKp94mzKKEdXPmCR3mY/9W3MZz3G3orBbCC74w+sR4hrzDtZ/VM3ekXTeg7X3lRnFsnN6GOtMQrdNaFUiqzBVHg8yx8muAzJgDL5JtJN+4KertCj5kpzuHk0Iz0sho8KscEjORh4dM4llPTTR/DsssMk07bcmq5dwmBI8/MC3jo=",
        hashedPass : "919754ec78b66c43bd1440a4df6030bb3d83314a77769881efcf02093f9923fd"
    }
]);

db.parts.insertMany([
    {
        title : "Test part 1",
        model : "Audi A4",
        year : 2015,
        description : "This is my test description 1",
        price : 50,
        image : "https://proformance-diesel.com/wp-content/uploads/stage_2.jpg"
    },
    {
        title : "Test part 2",
        model : "Audi A6",
        year : 2012,
        description : "This is my test description 2",
        price : 150,
        image : "https://proformance-diesel.com/wp-content/uploads/stage_2.jpg"
    }
]);

db.projects.insertMany([
    {
        title: 'Audi A4 450HP Big Turbo',
        model: 'Audi A4 B8',
        year: '2015',
        description: 'This is my cool Audi A4 project',
        image: 'https://www.tuningblog.eu/wp-content/uploads/2016/07/Audi-A4-B8-Limousine-ROT-RED-Tuning-Vossen-Wheels.jpg',
        creator: '5c86a9be1f731405acfd60e8',
      }
]);
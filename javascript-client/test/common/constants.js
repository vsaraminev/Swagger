const basePath = 'http://localhost:5000';
const apiAuthenticationName = 'Bearer';
const adminUser = {
    'email': 'admin@admin.com',
    'password': 'admin'
};
const nonAdminUser = {
    'email': 'gosho@abv.bg',
    'password': 'gosho'
};

const part = {
    'title': 'Admin part title',
    'model': 'Admin part model',
    'year': 2000,
    'description': 'Admin part description',
    'price': 10,
    'image': 'Admin part image'
};

const newPart = {
    'model': 'Admin part model',
    'title': 'Admin part title',
    'description': 'Admin part description',
    'year': 2000,
    'image': 'Admin part image',
    'price': 10,
};

const project = {
    'title': 'test Project',
    'model': 'test Model',
    'year': 2018,
    'description': 'This is test description',
    'image': 'string',
    'comments': [
        'Test comment'
    ]
};

const adminProject = {
    'title': 'Admin Project',
    'model': 'Admin Model',
    'year': 2010,
    'description': 'This is Admin test description',
    'image': 'string',
    'comments': [
        'Admin test comment'
    ]
};

const newAdminProject = {
    'title': 'Admin Edit Project',
    'model': 'Admin Edit Model',
    'year': 2011,
    'description': 'This is Admin test description',
    'image': 'string',
    'comments': [
      'Admin edited comment'
    ]
  };

module.exports = {
    apiAuthenticationName,
    basePath,
    adminUser,
    nonAdminUser,
    part,
    newPart,
    project,
    adminProject,
    newAdminProject
}
const basePath = 'http://localhost:5000';
const apiAuthenticationName = 'Bearer';

const userRole = 'User';

const adminRole = 'Admin';

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

const partId = '5cbc45ba9a2ce649503569eb';

const successSignedUp = 'You have successfully signed up! Now you should be able to log in.';

const incorrectCredentialsError = 'IncorrectCredentialsError';

const successLoggedIn = 'You have successfully logged in!';

const invalidCredentials = 'Invalid credentials';

const couldNotProccesForm = 'Could not process the form.';

const formErrors = 'Check the form for errors.';

const unAuthorized = 'Unauthorized!';

const somethingWentWrong = 'Something went wrong :(';

const commentMess = {
    'add': 'Comment added successfully.',
    'notExists': 'Comment does not exists!',
    'delete': 'Comment deleted successfully!',
    'exists': 'Comment with the given name already exists.'
}

const orderMess = {
    'add': 'Part added successfully to cart.',    
    'notExists': 'Order does not exists!'
};

const projectMess = {
    'add': 'Project added successfully.',
    'notExists': 'Project does not exists!',
    'edited': 'Project edited successfully!',
    'deleted': 'Project deleted successfully!'
};

const partMess = {
    'edit': 'Part edited successfully!',
    'notExists': 'Part does not exists!',
    'deleted': 'Part deleted successfully!'
};

const noUserWithTheseCred = 'There is no user with these credentials'

const validateProjectForm = {
    'title': 'Title must be more than 3 symbols.',
    'model': 'Model must be more than 3 symbols.',
    'year': 'Year must be between 1920 and 2019.',
    'description': 'Description must be more than 10 symbols.',
    'image': 'Image URL is required.'
};

const validatePartForm = {
    'model': 'Model must be more than 3 symbols.',
    'year': 'Year must be between 1920 and 2019.',
    'description': 'Description must be more than 10 symbols.',
    'price': 'Price must be a positive number.',
    'image': 'Image URL is required.'
};

const validateCommForm = {
    'content': 'Content must be at least 3 symbols and less than 200 symbols.',
    'creatorName': 'Invalid creatorName.',
    'creatorId': 'Invalid creatorId.',
    'projectId': 'Invalid projectId.'
};

const validateFormErr = {
    'email': 'Please provide a correct email address.',
    'password': 'Password must have at least 4 characters.',
    'name': 'Please provide your name.'
}

module.exports = {
    apiAuthenticationName,
    basePath,
    adminRole,
    userRole,
    adminUser,
    nonAdminUser,
    part,    
    newPart,
    project,
    adminProject,
    newAdminProject,
    successSignedUp,
    successLoggedIn,
    incorrectCredentialsError,
    invalidCredentials,
    couldNotProccesForm,
    validateFormErr,
    formErrors,
    unAuthorized,
    commentMess,
    validateCommForm,
    noUserWithTheseCred,
    somethingWentWrong,
    orderMess,
    partMess,
    validatePartForm,
    validateProjectForm,
    projectMess,
    partId
}
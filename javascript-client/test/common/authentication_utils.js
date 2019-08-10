const superagent = require('superagent');

async function loginUser(email, password, done) {
    const user = {
        email: email.trim(),
        password: password.trim()
    }

    try {
        const res = await superagent.post('http://localhost:5000/auth/login').send(user);
        console.log(res);
        if (res.status == 200) {
            return res.body.token;
        }
        throw "Unable to login because status code is not 200";
    } catch (err) {
        console.error(err);
        return err;
    }
};

async function loginUserObj(user) {
    try {
        return await this.loginUser(user.email, user.password);
    } catch (err) {
        console.error(err);
        return err;
    }
};

function setUserToken(instance, userToken, bearer) {
    instance.apiClient.authentications[bearer].apiKey = userToken;
    instance.apiClient.authentications[bearer].apiKeyPrefix = bearer;
}

module.exports = {
    loginUser,
    loginUserObj,
    setUserToken
}
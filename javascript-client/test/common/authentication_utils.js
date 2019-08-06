const superagent = require('superagent');

module.exports = {
    loginUser: async (email, password, done) => {
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
    },
    setUserToken: async (instance, userToken, bearer) => {
        instance.apiClient.authentications[bearer].apiKey = userToken;
        instance.apiClient.authentications[bearer].apiKeyPrefix = bearer;
    }
}


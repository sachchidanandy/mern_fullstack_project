exports.internalServerError = res => res.status(500).send('Something went wrong. Please try after sometime');
exports.userAlreadyExist = res => res.status(409).send('Email is already registered');
exports.invalidCredentials = res => res.status(400).send('Invalid credentials. Please try again.');
exports.tokenRequired = res => res.status(403).send('Token is required for Authorization');
exports.invalidToken = res => res.status(401).send('Invalid token');

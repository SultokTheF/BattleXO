const BASE_URL = "http://localhost:8000/api/v1";

const userValidateEndpoint = `${BASE_URL}/user/`;

const userEndpoints = `${BASE_URL}/users/`;
const registerEndpoint = `${BASE_URL}/register/`;
const loginEndpoint = `${BASE_URL}/login/`;
const tokenRefreshEndpoint = `${BASE_URL}/token/refresh/`;

const chatEndpoint = "http://127.0.0.1:8080/";

export { userValidateEndpoint, userEndpoints, registerEndpoint, loginEndpoint, tokenRefreshEndpoint, chatEndpoint };
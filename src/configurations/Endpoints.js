const PORT = 4000
const DOMAIN = `http://localhost:${PORT}`
const API_CONTEXT = '/api'

module.exports.APIS = {
    login: `${DOMAIN}${API_CONTEXT}/login`,
    signup: `${DOMAIN}${API_CONTEXT}/signup`,
    userData: `${DOMAIN}${API_CONTEXT}/userdata`,
}
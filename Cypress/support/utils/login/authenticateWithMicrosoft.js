/**
 * Authenticates login with Microsoft and returns a valid access token.
 */
export const authenticateWithMicrosoft = (userEmail, password) => {
  return cy
    .request({
      method: 'POST',
      url: 'https://login.microsoftonline.com/common/oauth2/token',
      form: true,
      body: {
        grant_type: 'password',
        resource: Cypress.env('API_ENV_URL'),
        client_id: Cypress.env('API_CLIENT_ID'),
        username: userEmail,
        password: password,
      },
    })
    .then(response => {
      return response.body.access_token
    })
}
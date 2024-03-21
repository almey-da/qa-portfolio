import { VALID_LOGIN } from '../data/login.data';
import { ROUTES } from '../const/routes';
import { BASE_URL } from '../const/routes';
import { UPDATE_PROFILE } from '../const/routes';

describe('Update profile', () => {
  let accessToken;

  beforeEach(() => {
    cy.request({
        method: 'POST',
        url: BASE_URL.baseUrl + ROUTES.login,
        body: {
          email: VALID_LOGIN.email,
          password: VALID_LOGIN.password 
        },
      }).then((response) => {
        accessToken = response.body.credentials.access_token;
      });
    });
    
  it('should successfully update profile', () => {
    cy.request({
      method: 'PUT',
      url: BASE_URL.baseUrl + UPDATE_PROFILE.updateProfile,
      body: {
        name: "gavikoto"
      },
      headers: {
        Authorization: accessToken
    }}
      ).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.equal('Username Anda menjadi gavikoto');
      expect(response.body.status).to.equal('SUCCESS_UPDATE_PROFILE');
      expect(response.body.message).to.equal('Berhasil Perbarui Profile');

    });
  })

  it('should fail update profile using invalid authorization', () => {
    cy.request({
      method: 'PUT',
      url: BASE_URL.baseUrl + UPDATE_PROFILE.updateProfile,
      body: {
        name: "gavikoto"
      },
      headers: {
        Authorization: "c2f4fa287dcd0aca98825239633bb"
    },
    failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(420);
      expect(response.body.data).to.equal(`User's not found`);
      expect(response.body.status).to.equal('FAILED_LOGIN');
      expect(response.body.message).to.equal('Credential is not valid');

    });
  })
});
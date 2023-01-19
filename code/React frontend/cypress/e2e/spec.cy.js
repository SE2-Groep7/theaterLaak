import { mockImport } from '@testing-library/cypress/add-commands';
import { seededFarmList } from '../fixtures/example.json';
import Cookies  from "js-cookie";
describe('Login', () => {
  beforeEach(() => {
    cy.intercept(
    `https://mohieddin.nl/accountApi/api/account/login`,
    { fixture: 'example.json' });
    cy.intercept(
      `https://mohieddin.nl/accountApi/api/account`,
      { fixture: 'example2.json' });

    cy.visit('localhost:3000/login');

  });
  

  it('should login and redirect to profile page', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password');

    cy.get('input[type="submit"]').click().should(() => {expect(Cookies.get('loggedIn')).to.eq(JSON.stringify({ roles: ['admin'], loggedIn: true }));});
    cy.url().should('include', '/profile');
    cy.getCookie('jwt').should('have.property', 'value', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJhZG1pbiJdLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTE2MjM5MDIyfQ.AS8Oo3JCvU_P3pJToDxC2XBWKpQcijqzGa_h4gDNzgU');
    
  });
});

export default class Routes {
  setLoginRoute() {
    cy.intercept({
      method: 'GET',
      url: '/person*',
    }).as("loginIdentityRequest");
  };
  setRegRoute() {
    cy.intercept({
      method: 'get',
      url: '/api/cms/ecom/v1/GB/usercontext/@self/contextdata',
    }).as("regRequest");
  };
}

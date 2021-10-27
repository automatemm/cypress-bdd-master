export default class TestSettings {
  static getInstance() {

    constructor() {
        if (!Singleton._instance) {
          Singleton._instance = this;
        }
        return Singleton._instance;
      }
      
    TestSettings.instance.apiDomain = Cypress.env('ApiDomain');
    TestSettings.instance.apiBasePath = Cypress.env('ApiBasePath');
  }
}

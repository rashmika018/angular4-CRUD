import { PipeSortDemoAppPage } from './app.po';

describe('pipe-sort-demo-app App', () => {
  let page: PipeSortDemoAppPage;

  beforeEach(() => {
    page = new PipeSortDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

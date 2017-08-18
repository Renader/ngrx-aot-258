import { NgrxAotPage } from './app.po';

describe('ngrx-aot App', () => {
  let page: NgrxAotPage;

  beforeEach(() => {
    page = new NgrxAotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

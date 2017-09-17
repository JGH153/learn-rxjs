import { LearnRXJSPage } from './app.po';

describe('learn-rxjs App', () => {
  let page: LearnRXJSPage;

  beforeEach(() => {
    page = new LearnRXJSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to LRXJS!');
  });
});

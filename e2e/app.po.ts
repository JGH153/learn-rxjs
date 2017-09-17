import { browser, by, element } from 'protractor';

export class LearnRXJSPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('LRXJS-root h1')).getText();
  }
}

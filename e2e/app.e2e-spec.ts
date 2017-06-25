import { ReactiveRxPage } from './app.po';

describe('reactive-rx App', () => {
  let page: ReactiveRxPage;

  beforeEach(() => {
    page = new ReactiveRxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

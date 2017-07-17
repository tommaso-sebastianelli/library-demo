import { LibraryDemoPage } from './app.po';

describe('library-demo App', () => {
  let page: LibraryDemoPage;

  beforeEach(() => {
    page = new LibraryDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

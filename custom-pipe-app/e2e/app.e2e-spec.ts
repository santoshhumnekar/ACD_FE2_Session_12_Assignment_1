import { CustomPipeAppPage } from './app.po';

describe('custom-pipe-app App', function() {
  let page: CustomPipeAppPage;

  beforeEach(() => {
    page = new CustomPipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

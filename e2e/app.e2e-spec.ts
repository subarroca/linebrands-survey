import { LifebrandsPage } from './app.po';

describe('linebrands App', () => {
  let page: LifebrandsPage;

  beforeEach(() => {
    page = new LifebrandsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lb works!');
  });
});

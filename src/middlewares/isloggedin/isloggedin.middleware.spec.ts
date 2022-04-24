import { IsloggedinMiddleware } from './isloggedin.middleware';

describe('IsloggedinMiddleware', () => {
  it('should be defined', () => {
    expect(new IsloggedinMiddleware()).toBeDefined();
  });
});

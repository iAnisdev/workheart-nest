import { IsloggedinGuard } from './isloggedin.guard';

describe('IsloggedinGuard', () => {
  it('should be defined', () => {
    expect(new IsloggedinGuard()).toBeDefined();
  });
});

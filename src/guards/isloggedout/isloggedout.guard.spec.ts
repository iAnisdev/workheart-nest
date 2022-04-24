import { IsloggedoutGuard } from './isloggedout.guard';

describe('IsloggedoutGuard', () => {
  it('should be defined', () => {
    expect(new IsloggedoutGuard()).toBeDefined();
  });
});

import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class IsloggedinMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  async use(req: any, res: any, next: () => void) {
    if (req.header('x-auth-token')) {
      try {
        let decoded = await this.jwtService.verify(req.header('x-auth-token'));
        req.client = decoded;
        next();
      } catch (e) {
        res.status(HttpStatus.UNAUTHORIZED).json({
          statusCode: HttpStatus.UNAUTHORIZED,
          ...e,
        });
      }
    } else {
      res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Access Token Missing in header',
      });
    }
  }
}

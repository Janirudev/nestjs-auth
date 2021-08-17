import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome Guest!';
  }

  getProtected(user): string {
    return `Welcome ${user}!`;
  }
}

import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return 'Hello from backend ᕕ( ᐛ )ᕗ'
  }
}

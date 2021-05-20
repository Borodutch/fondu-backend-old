import { Injectable } from '@nestjs/common';
import * as solc from 'solc';

@Injectable()
export class CompilerService {
  compileContract(filename: string) {
    return filename;
  }
}

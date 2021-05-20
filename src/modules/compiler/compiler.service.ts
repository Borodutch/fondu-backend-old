import { Injectable } from '@nestjs/common';
import solc from 'solc';

@Injectable()
export class CompilerService {
  compileContract(filename: string) {
    return filename;
  }
}

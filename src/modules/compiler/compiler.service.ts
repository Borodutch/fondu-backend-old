import { Injectable } from '@nestjs/common';
import { readFile, readFileSync } from 'fs-extra';
import { resolve } from 'path';
import * as solc from 'solc';

@Injectable()
export class CompilerService {
  compileContract(filename: string) {
    const config = {
      language: 'Solidity',
      sources: {
        'Contract.sol': {
          content: readFileSync(
            resolve('contracts', filename, `${filename}.sol`),
            'utf8',
          ),
        },
      },
      settings: {
        outputSelection: {
          '*': {
            '*': ['*'],
          },
        },
      },
    };
    const output = JSON.parse(
      solc.compile(JSON.stringify(config), {
        import: this.findImports,
      }),
    );
    return output;
  }

  private findImports(path: string) {
    if (path === 'ERC20.sol') {
      return {
        contents: readFileSync(
          resolve(
            '/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol',
          ),
        ),
      };
    }
    return { error: 'File not found' };
  }
}

import { Injectable } from '@nestjs/common';
import { outputFileSync, readFileSync } from 'fs-extra';
import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import { Contract } from './interfaces/contract.interface';

@Injectable()
export class ContractService {
  create(contract: Contract) {
    const contractSource = readFileSync(
      `./templates/${contract.token}.sol.template`,
    );
    const contractTemplate = Handlebars.compile(contractSource.toString());
    const contractOutput = contractTemplate(contract.data);
    const outputFilename = `${nanoid()}.sol`;
    outputFileSync(`./contracts/${outputFilename}`, contractOutput);
    return outputFilename;
  }
}

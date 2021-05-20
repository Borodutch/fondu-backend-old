import { Injectable } from '@nestjs/common';
import { outputFile, readFileSync } from 'fs-extra';
import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import { CreateErc20Dto } from './dto/create-erc20.dto';

@Injectable()
export class Erc20Service {
  createContract(createErc20Dto: CreateErc20Dto) {
    const contractSource = readFileSync('./templates/ERC20.sol.template');
    const contractTemplate = Handlebars.compile(contractSource.toString());
    const contractOutput = contractTemplate(createErc20Dto);

    const outputFilename = nanoid();
    return outputFile(`./contracts/${outputFilename}.sol`, contractOutput);
  }
}

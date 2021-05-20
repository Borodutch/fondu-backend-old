import { Injectable } from '@nestjs/common';
import { outputFile, readFileSync } from 'fs-extra';
import { nanoid } from 'nanoid';
import { CreateErc721Dto } from './dto/create-erc721.dto';

@Injectable()
export class Erc721Service {
  createContract(createErc721Dto: CreateErc721Dto) {
    const contractSource = readFileSync('./templates/ERC721.sol.template');
    const contractTemplate = Handlebars.compile(contractSource.toString());
    const contractOutput = contractTemplate(createErc721Dto);
    const outputFilename = nanoid();
    return outputFile(`./contracts/${outputFilename}.sol`, contractOutput);
  }
}

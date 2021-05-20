import { Injectable } from '@nestjs/common';
import { CompilerService } from '../compiler/compiler.service';
import { ContractService } from '../contract/contract.service';
import { TokenType } from '../contract/interfaces/contract.interface';
import { CreateErc721Dto } from './dto/create-erc721.dto';

@Injectable()
export class Erc721Service {
  constructor(
    private readonly contractService: ContractService,
    private readonly compilerService: CompilerService,
  ) {}

  createContract(createErc721Dto: CreateErc721Dto) {
    const contractFilename = this.contractService.create({
      data: createErc721Dto,
      token: TokenType.ERC721,
    });
    return this.compilerService.compileContract(contractFilename);
  }
}

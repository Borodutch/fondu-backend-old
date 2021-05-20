import { Injectable } from '@nestjs/common';
import { CompilerService } from '../compiler/compiler.service';
import { ContractService } from '../contract/contract.service';
import { TokenType } from '../contract/interfaces/contract.interface';
import { CreateErc20Dto } from './dto/create-erc20.dto';

@Injectable()
export class Erc20Service {
  constructor(
    private readonly contractService: ContractService,
    private readonly compilerService: CompilerService,
  ) {}

  createContract(createErc20Dto: CreateErc20Dto) {
    const contractFilename = this.contractService.create({
      data: createErc20Dto,
      token: TokenType.ERC20,
    });
    return this.compilerService.compileContract(contractFilename);
  }
}

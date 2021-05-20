import { Injectable } from '@nestjs/common';
import { ContractService } from '../contract/contract.service';
import { TokenType } from '../contract/interfaces/contract.interface';
import { CreateErc721Dto } from './dto/create-erc721.dto';

@Injectable()
export class Erc721Service {
  constructor(private readonly contractService: ContractService) {}

  createContract(createErc721Dto: CreateErc721Dto) {
    return this.contractService.create({
      data: createErc721Dto,
      token: TokenType.ERC721,
    });
  }
}

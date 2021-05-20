import { CreateErc20Dto } from 'src/modules/erc20/dto/create-erc20.dto';
import { CreateErc721Dto } from 'src/modules/erc721/dto/create-erc721.dto';

export enum TokenType {
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
}

export interface Contract {
  data: CreateErc20Dto | CreateErc721Dto;
  token: TokenType;
}

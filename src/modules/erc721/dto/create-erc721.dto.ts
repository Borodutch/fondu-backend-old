import { IsString } from 'class-validator';

export class CreateErc721Dto {
  @IsString()
  name: string;

  @IsString()
  symbol: string;
}

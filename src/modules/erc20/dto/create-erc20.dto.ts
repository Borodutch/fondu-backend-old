import { IsString } from 'class-validator';

export class CreateErc20Dto {
  @IsString()
  name: string;

  @IsString()
  symbol: string;
}

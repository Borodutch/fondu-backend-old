import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateErc20Dto } from './dto/create-erc20.dto';
import { Erc20Service } from './erc20.service';

@Controller('erc20')
export class Erc20Controller {
  constructor(private readonly erc20Service: Erc20Service) {}

  @Post()
  @UsePipes(new ValidationPipe())
  newErc20Contract(@Body() createErc20Dto: CreateErc20Dto) {
    return this.erc20Service.createContract(createErc20Dto);
  }
}

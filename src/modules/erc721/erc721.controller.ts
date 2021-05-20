import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateErc721Dto } from './dto/create-erc721.dto';
import { Erc721Service } from './erc721.service';

@Controller('erc721')
export class Erc721Controller {
  constructor(private readonly erc721Service: Erc721Service) {}

  @Post()
  @UsePipes(new ValidationPipe())
  newErc20Contract(@Body() createErc721Dto: CreateErc721Dto) {
    this.erc721Service.createContract(createErc721Dto);
  }
}

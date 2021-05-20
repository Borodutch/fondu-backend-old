import { Module } from '@nestjs/common';
import { Erc721Service } from './erc721.service';
import { Erc721Controller } from './erc721.controller';
import { ContractModule } from '../contract/contract.module';
import { CompilerModule } from '../compiler/compiler.module';

@Module({
  imports: [ContractModule, CompilerModule],
  providers: [Erc721Service],
  controllers: [Erc721Controller],
})
export class Erc721Module {}

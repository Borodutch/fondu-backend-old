import { Module } from '@nestjs/common';
import { Erc20Service } from './erc20.service';
import { Erc20Controller } from './erc20.controller';
import { ContractModule } from '../contract/contract.module';

@Module({
  imports: [ContractModule],
  providers: [Erc20Service],
  controllers: [Erc20Controller],
})
export class Erc20Module {}

import { Module } from '@nestjs/common';

import { ProductModule } from './product/product.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [ProductModule, CategoriasModule],
})
export class AppModule {}

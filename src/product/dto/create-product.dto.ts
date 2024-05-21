import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Product } from '../entities/product.entity';
import { Type } from 'class-transformer';

export class CreateProductDto extends Product {
  @IsString({ message: 'Nombre debe ser un string' })
  @IsNotEmpty({ message: 'Debe de ingresar algo valido' })
  nombre: string;
  @IsString({ message: 'Descripcion debe ser un string' })
  @IsNotEmpty({ message: 'Debe de ingresar algo valido' })
  descripcion: string;
  @IsNotEmpty({ message: 'Deja un precio valido' })
  @IsPositive({ message: 'El precio debe ser positivo' })
  @Type(() => Number)
  precio: number;
}

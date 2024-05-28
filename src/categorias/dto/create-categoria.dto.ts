import { IsString, IsNotEmpty } from 'class-validator';
import { Categoria } from '../entities/categoria.entity';

export class CreateCategoriaDto extends Categoria {
  @IsString({ message: 'Nombre debe ser un string' })
  @IsNotEmpty({ message: 'Debe de ingresar algo valido' })
  nombre: string;
  @IsString({ message: 'Descripcion debe ser un string' })
  @IsNotEmpty({ message: 'Debe de ingresar algo valido' })
  descripcion: string;
}

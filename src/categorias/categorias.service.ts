import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { error } from 'console';

@Injectable()
export class CategoriasService {
  private categorias: Categoria[] = [
    { id: 20, nombre: 'Auto', descripcion: 'lujoso' },
    { id: 40, nombre: 'Vajilla', descripcion: 'limpia' },
    { id: 30, nombre: 'Comida', descripcion: 'rica, sabrosa' },
    { id: 50, nombre: 'Limpieza', descripcion: 'lo mas brillante' },
    { id: 60, nombre: 'Cocina', descripcion: 'de alta calidad' },
  ];

  create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = new Categoria();
    categoria.nombre = createCategoriaDto.nombre;
    categoria.descripcion = createCategoriaDto.descripcion;
    categoria.id = 12;
    this.categorias.push(categoria);
    return categoria;
  }

  findAll() {
    return this.categorias;
  }

  findOne(id: number) {
    const categoria = this.categorias.find((P) => P.id === id);
    if (!categoria) {
      throw new Error();
    }
    return categoria;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = this.findOne(id);
    categoria.nombre = updateCategoriaDto?.nombre;
    categoria.descripcion = updateCategoriaDto?.descripcion;
    return categoria;
  }

  remove(id: number) {
    const categoriaindex = this.categorias.findIndex((p) => p.id === id);
    if (categoriaindex === -1) {
      throw new Error('La categoria no existe :/');
    }
    this.categorias.splice(categoriaindex, 1);

    return this.categorias;
  }
}

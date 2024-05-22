import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class ProductService {
  private categorias: Categoria[] = [
    { id: 1, nombre: 'alvaro', descripcion: 'fachero' },
    { id: 4, nombre: 'igna', descripcion: 'falopero' },
    { id: 3, nombre: 'pancho', descripcion: 'capo' },
    { id: 5, nombre: 'fran', descripcion: 'fideo' },
    { id: 6, nombre: 'valentin', descripcion: 'crack' },
  ];

  private productos: Product[] = [
    { id: 2, precio: 500, nombre: 'heladera', descripcion: 'blanca', idCategoria: 1 },
    { id: 3, precio: 600, nombre: 'microhondas', descripcion: 'blanca', idCategoria: 6 },
    { id: 5, precio: 555, nombre: 'computadora', descripcion: 'blanca', idCategoria: 5 },
    { id: 4, precio: 343, nombre: 'monitor', descripcion: 'blanca', idCategoria: 4 },
    { id: 6, precio: 54234, nombre: 'mouse', descripcion: 'blanca', idCategoria: 3 },
    { id: 11, precio: 500, nombre: 'heladera2', descripcion: 'blanca', idCategoria: 1 },
    { id: 10, precio: 600, nombre: 'microhondas3', descripcion: 'blanca', idCategoria: 6 },
    { id: 9, precio: 555, nombre: 'computadora4', descripcion: 'blanca', idCategoria: 5 },
    { id: 8, precio: 343, nombre: 'monitor5', descripcion: 'blanca', idCategoria: 4 },
    { id: 7, precio: 54234, nombre: 'mouse6', descripcion: 'blanca', idCategoria: 3 },
  ];

  create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.nombre = createProductDto.nombre;
    product.descripcion = createProductDto.descripcion;
    product.precio = createProductDto.precio;
    product.id = 8;

    return product;
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    const product = this.productos.find((P) => P.id === id);
    if (!product) {
      throw new Error();
    }

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const producto = this.findOne(id);
    producto.nombre = updateProductDto?.nombre;
    producto.descripcion = updateProductDto?.descripcion;
    producto.precio = updateProductDto?.precio;
    return producto;
  }

  remove(id: number) {
    const productindex = this.productos.findIndex((p) => p.id === id);
    if (productindex === -1) {
      throw new Error('El producto no existe :/');
    }
    this.productos.splice(productindex, 1);

    return this.productos;
  }

  findByCategoria(id: number) {
    const productos = this.productos.filter((P) => P.idCategoria === id);
    return productos;
  }
}

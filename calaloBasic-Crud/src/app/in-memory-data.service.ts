import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const products = [
      {
        id: 1001,
        pname: 'JBL',
        type: 'Speaker',
        stock: 99,
        pprice: 798.00,
        pfrom: 'Baguio City, Benguet',
        powner: 'Michael Calalo',
        email:'',
        mobnum:'',
        pimg: '../../assets/IMAGE/jbl.jpg',
    },
    {
        id: 1002,
        pname: 'Relx Infinity Device',
        type: 'Pod',
        stock: 99,
        pprice: 650.00,
        pfrom: 'Baguio City, Benguet',
        powner: 'Michael Calalo',
        email:'',
        mobnum:'',
        pimg: '../../assets/IMAGE/relx.jpg'
    },
    {
        id: 1003,
        pname: 'one piece phone cases',
        type: 'Phone Case',
        stock: 99,
        pprice: 499.00,
        pfrom: 'Baguio City, Benguet',
        powner: 'Michael Calalo',
        email:'',
        mobnum:'',
        pimg: '../../assets/IMAGE/case.jpg'
    },
    {
        id: 1004,
        pname: 'VIVO Y91',
        type: 'Phone',
        stock: 99,
        pprice: 2099.00,
        pfrom: 'Baguio City, Benguet',
        powner: 'Michael Calalo',
        email:'',
        mobnum:'',
        pimg: '../../assets/IMAGE/vivo.jpg'
    },
    {
        id: 1005,
        pname: 'Iphone 6S',
        type: 'Phone',
        stock: 99,
        pprice: 6200.00,
        pfrom: 'Baguio City, Benguet',
        powner: 'Michael Calalo',
        email:'',
        mobnum:'',
        pimg: '../../assets/IMAGE/iphone.jpg'
    }
    ];
    return {products}
  }

  generatedId(products:Product[]): number{
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1001;
  }

  constructor() { }
}


# Bsale - Ecommerce
Este proyecto es una API para un ecommerce de bebidas y snacks que se ha realizado en base a un desafío dispuesto por la empresa Bsale. Realiza peticiones al servidor para obtener productos y categorías.

## Variables de Entorno
***
Para ejecutar este proyecto, tendrá que añadir las siguientes variables de entorno a su archivo .env

Estas variables son para la conexión a tu base de datos

`HOST`

`USER`

`PASSWORD`

`DATABASE`

`PORT`

## Tecnologías
***
* [NodeJS](https://nodejs.org/en/): Version 16.8.0 
* [Express](https://expressjs.com/es/): Version 4.18.2

## Instalación
***
```bash
$ git clone https://github.com/DavidVidaurre/Bsale-Ecommerce__Backend
$ npm install
```

## Ejecución
***
```bash
  $ npm start
```

## Referencia API
***
### Productos

#### Obtener todos los productos

```http
  GET /products
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 5,
          "name": "ENERGETICA MR BIG",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
          "price": 1490,
          "discount": 20,
          "category": 1
      },
      ...
    ]
  }
```

#### Obtener un solo producto

```http
  GET /products/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id del producto a buscar |

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 5,
          "name": "ENERGETICA MR BIG",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
          "price": 1490,
          "discount": 20,
          "category": 1
      }
    ]
  }
```

#### Obtener productos con descuento

```http
  GET /products/discount
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 5,
          "name": "ENERGETICA MR BIG",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
          "price": 1490,
          "discount": 20,
          "category": 1
      },
      {
          "id": 8,
          "name": "PISCO ALTO DEL CARMEN 35º",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
          "price": 7990,
          "discount": 10,
          "category": 2
      },
      ...
    ]
  }
```

#### Obtener productos por una búsqueda

```http
  GET /products/search/:name
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Requerido**. Nombre del producto a buscar |

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 8,
          "name": "PISCO ALTO DEL CARMEN 35º",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
          "price": 7990,
          "discount": 10,
          "category": 2
      }
    ]
  }
```

#### Obtener productos por nombre ascendente

```http
  GET /products/name/increasing
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 104,
          "name": "ABSOLUT",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
          "price": 8990,
          "discount": 30,
          "category": 7
      },
      {
          "id": 68,
          "name": "Bebida Sprite 1 Lt",
          "url_image": null,
          "price": 1250,
          "discount": 10,
          "category": 4
      },
      ...
    ]
  }
```

#### Obtener productos por nombre descendente

```http
  GET /products/name/decreasing
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 50,
          "name": "SPRITE 2 Lt",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-2lt4365.jpg",
          "price": 1800,
          "discount": 0,
          "category": 4
      },
      {
          "id": 48,
          "name": "SPRITE 1 1/2 Lts",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-lata-33cl5575.jpg",
          "price": 1500,
          "discount": 0,
          "category": 4
      },
      ...
    ]
  }
```

#### Obtener productos por el precio más alto

```http
  GET /products/price/higher
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 91,
          "name": "PISCO MISTRAL NOBEL 40°",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",
          "price": 19990,
          "discount": 0,
          "category": 2
      },
      {
          "id": 88,
          "name": "PISCO MISTRAL GRAN NOBEL 40°",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg",
          "price": 19900,
          "discount": 0,
          "category": 2
      },
      ...
    ]
  }
```
****Nota:**** Al precio ya se le está restando el descuento que tiene

#### Obtener productos por el precio más bajo

```http
  GET /products/price/lower
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 53,
          "name": "Mani Sin Sal",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
          "price": 500,
          "discount": 0,
          "category": 5
      },
      {
          "id": 55,
          "name": "Papas Fritas Bolsa Pequeña",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
          "price": 500,
          "discount": 0,
          "category": 5
      },
      ...
    ]
  }
```
****Nota:**** Al precio ya se le está restando el descuento que tiene

#### Obtener productos entre un rango de precios

```http
  POST /products/price/between
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `lowerPrice`      | `number` | **Requerido**. Menor precio del producto a buscar |
| `higherPrice`      | `number` | **Requerido**. Mayor precio del producto a buscar |

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 99,
          "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
          "url_image": "",
          "price": 800,
          "discount": 0,
          "category": 6
      },
      {
          "id": 68,
          "name": "Bebida Sprite 1 Lt",
          "url_image": null,
          "price": 1125,
          "discount": 10,
          "category": 4
      },
      ...
    ]
  }
```

### Categories

#### Obtener todas las categorías

```http
  GET /categories
```

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 1,
          "name": "bebida energetica"
      },
      {
          "id": 2,
          "name": "pisco"
      },
      ...
    ]
  }
```

#### Obtener una sola categoría

```http
  GET /categories/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id de la categoría a buscar |

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 7,
          "name": "vodka"
      }
    ]
  }
```

#### Obtener productos por categoría

```http
  GET /categories/products/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id de la categoría a buscar y obtener sus productos |

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": true,
    "data": [
      {
          "id": 23,
          "name": "RON BACARDI AÑEJO",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
          "price": 4990,
          "discount": 0,
          "category": 3
      },
      {
          "id": 24,
          "name": "RON BACARDI 8 AÑOS",
          "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
          "price": 5990,
          "discount": 0,
          "category": 3
      },
      ...
    ]
  }
```

### Productos - Categoría => Sin datos en la petición

#### *Ejemplo del Resultado JSON*
```sh
  {
    "ok": false,
    "message": "No products in this price range"
  }
```
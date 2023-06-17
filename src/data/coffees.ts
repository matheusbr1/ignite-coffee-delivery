import { ICoffee } from "../interfaces/coffee";

export const COFFEES: ICoffee[] = [
  {
    imageName: 'Expresso',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    chips: ['Tradicional'],
    price: 9.90
  },
  {
    imageName: 'Americano',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    chips: ['Tradicional'],
    price: 9.90
  },
  {
    imageName: 'Expresso Cremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    chips: ['Tradicional'],
    price: 9.90
  },
  {
    imageName: 'Café Gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    chips: ['Tradicional', 'Gelado'],
    price: 9.90
  },
  {
    imageName: 'Café com Leite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    chips: ['Tradicional', 'Com Leite'],
    price: 9.90
  },
  {
    imageName: 'Latte',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    chips: ['Tradicional', 'Com Leite'],
    price: 9.90
  },
  {
    imageName: 'Capuccino',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    chips: ['Tradicional', 'Com Leite'],
    price: 9.90
  },
  {
    imageName: 'Macchiato',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    chips: ['Tradicional', 'Com Leite'],
    price: 9.90
  },
  {
    imageName: 'Mocaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    chips: ['Tradicional', 'Com Leite'],
    price: 9.90
  },
  {
    imageName: 'Chocolate Quente',
    name: 'Chocolate Quente',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    chips: ['Especial', 'Com Leite'],
    price: 12.90
  },
  {
    imageName: 'Cubano',
    name: 'Cubano',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    chips: ['Especial', 'Alcoólico', 'Gelado'],
    price: 13.50
  },
  {
    imageName: 'Havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    chips: ['Especial'],
    price: 14.80
  },
  {
    imageName: 'Árabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    chips: ['Especial'],
    price: 15.85
  },
  {
    imageName: 'Irlandês',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    chips: ['Especial', 'Alcoólico'],
    price: 15.85
  },
]
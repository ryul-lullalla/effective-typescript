enum Flavor_5302 {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
}

let flavor_5302 = Flavor_5302.CHOCOLATE;  // Type is Flavor
flavor_5302 = 'strawberry';
 // ~~~~~~ Type '"strawberry"' is not assignable to type 'Flavor'

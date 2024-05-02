export class Product {
  id: number;
  name: string;
  description: string;
  quantity: number;

  constructor(id: number = 0, name: string = '', description: string = '', quantity: number = 0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
  }
}

import { Category } from "./model/category.model";
import { Product } from "./model/product.model";
import { Cart } from "./model/cart.model";
import { User, Role } from "./model/user.model";

console.log("Sistema de E-commerce iniciado");

// Criando categorias
const electronics: Category = {
  id: 1,
  name: "Eletrônicos"
};

const books: Category = {
  id: 2,
  name: "Livros"
};

// Criando produtos
const notebook: Product = {
  id: 1,
  name: "Notebook",
  price: 3500,
  category: electronics
};

const book: Product = {
  id: 2,
  name: "Livro TypeScript",
  price: 120,
  category: books
};

// Criando usuário
const user = new User(
  1,
  "ednardo",
  "ednardo@email.com",
  Role.CUSTOMER
);

console.log("Usuário:", user);

// Criando carrinho
const cart = new Cart();

// Adicionando produtos
cart.addItem(notebook, 1);
cart.addItem(book, 2);
cart.addItem(book, 1);

// Exibindo resultados
console.log("Itens no carrinho:", cart.getItems());
console.log("Total de itens:", cart.getTotalItems());
console.log("Valor total:", cart.getFinalPrice());
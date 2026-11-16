// Task 1

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "id" | "name">;

const productPreview: ProductPreview = {
  id: 1,
  name: "Product"
};

console.log(productPreview);



// Task 2

type ProductUpdate = Partial<Product>;

function applyUpdate(product: Product, update: ProductUpdate): Product {
  return { ...product, ...update };
}

console.log(applyUpdate({ id: 1, name: "Product", price: 10, description: "A product" }, { price: 15 }));



// Task 3

type ProductCatalog = Record<string, Product>;

const sampleCatalog: ProductCatalog = {
  "product1": { id: 1, name: "Product", price: 10, description: "A product" },
  "product2": { id: 2, name: "Product2", price: 15, description: "A product2" }
};

console.log(sampleCatalog.product1?.name);
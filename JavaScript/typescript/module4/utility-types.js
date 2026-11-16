"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
const productPreview = {
    id: 1,
    name: "Product"
};
console.log(productPreview);
function applyUpdate(product, update) {
    return { ...product, ...update };
}
console.log(applyUpdate({ id: 1, name: "Product", price: 10, description: "A product" }, { price: 15 }));
const sampleCatalog = {
    "product1": { id: 1, name: "Product", price: 10, description: "A product" },
    "product2": { id: 2, name: "Product2", price: 15, description: "A product2" }
};
console.log(sampleCatalog.product1?.name);
//# sourceMappingURL=utility-types.js.map
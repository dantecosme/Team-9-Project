class ProductsController {
    constructor(currentId = 0) {
        this._currentId = currentId;
        this._items = [];
    }

    get currentId() {
        return this.currentId;
    }

    get items() {
        return this._items;
    }

    addItem(name, description, img, price, createdAt) {
        this._currentId++;
        const newItem = {
            id: this._currentId,
            name: name,
            description: description,
            img: img,
            price: price,
            createdAt: createdAt,
        };
        this._items.push(newItem);
    }
}

//  testing code
// const productArrayTest = new ProductsController();
// productArrayTest.addItem('Test product', 'This is the test description of my new product item', './resources/img/huawei.jpg', '$20', '04-28-2023');
// console.log(productArrayTest.items) 
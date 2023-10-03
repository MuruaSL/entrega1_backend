import  fs  from 'fs'
import  path  from 'path'

class ProductManager{
    //GlobalVars//
    static lastId = 0;
    static products = []

    constructor(pathExterna){
        //camino para el archivo de usuarios
        this.path = pathExterna
        
    }

    //functions//
    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !stock || !code) {
            throw new Error("Todos los campos son obligatorios.");
        }
        //cargar los productos existentes hasta el momento 
        this.loadProducts()
        // Validar que "code" no se repita en el nuevo producto
        const codeExists = ProductManager.products.some((product) => product.code === code);
        if (codeExists) {
            console.log("El código del producto ya existe");
            return; // No devuelve nada en este caso
        }
        //si el codigo ingresado no existe...
        // Incrementar el lastId para el nuevo producto
        const ultimoId = ProductManager.products.length > 0 ? ProductManager.products[ProductManager.products.length - 1].id : 0;
        ProductManager.lastId = ultimoId + 1;

        // Crear un nuevo producto con un id autoincrementable
        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.lastId
        };

        // Agregar el nuevo producto al arreglo de productos
        ProductManager.products.push(newProduct);
        this.updateProducts();
        return newProduct; // Devuelve el nuevo producto
        
    }
    
    
    //obtener los productos desde el json
    loadProducts() {
        try {
            const jsonData = fs.readFileSync(this.path, 'utf-8');
            ProductManager.products = JSON.parse(jsonData) || [];
            return ProductManager.products;
        } catch (error) {
            if (error.code === 'ENOENT') {
                fs.mkdirSync(path.dirname(this.path), { recursive: true });
                ProductManager.products = [];
                return [];
            } else {
                console.error('Error al cargar productos:', error);
                ProductManager.products = [];
                return [];
            }
        }
    }

    
    updateProducts() {
        fs.writeFileSync(this.path, JSON.stringify(ProductManager.products, null, 2), 'utf-8');
    }

    getProducts(){
        this.loadProducts()
        return ProductManager.products
    }


    getProductById(searchedID) {
        // Busca en el arreglo de productos de la instancia actual
        const product = this.getProducts().find((product) => product.id === searchedID);
        if (product) {
            return product;
        } else {
            throw new Error("Producto no encontrado");
        }
    }
    

    deleteProduct(idToDelete) {
        //se verifica que esten cargados los productos actualizados
        this.getProducts()
        // Buscar el índice del producto con el ID especificado
        const indexToDelete = ProductManager.products.findIndex((product) => product.id === idToDelete);
    
        if (indexToDelete !== -1) {
            // Si se encuentra el producto, eliminarlo del arreglo
            ProductManager.products.splice(indexToDelete, 1);
            this.updateProducts();
            return console.log(`Producto con ID ${idToDelete} eliminado exitosamente.`);
        } else {
            console.log(`Producto con ID ${idToDelete} no encontrado.`);
        }
    }
    
}

//---------------------------------------------------------------------
// Utilización
// Creación del manager
let manager = new ProductManager('json/productosDesafio2.json');
manager.loadProducts(); // Precarga de productos
//-------------------------------------------

export default ProductManager;
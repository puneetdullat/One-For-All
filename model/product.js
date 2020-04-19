const products=
{
    fakeDB : {best:[], prod:[],prod1:[],prod2:[],prod3:[],prod4:[]},

    init()
    {

        this.fakeDB.prod.push({title:'Watches',src: '/img/watch.jpg', href: '/product/products1'});
    
        this. fakeDB.prod.push({title:'Sunglasses',src: '/img/sunglasses.jpg', href: '/product/products2'});
    
        this.fakeDB.prod.push({title:'Computer Accessories',src: '/img/computer.jpg', href: '/product/products3'});
        
        this.fakeDB.prod.push({title:'Perfumes',src: '/img/perfume.jpg', href: '/product/products4'});

        
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
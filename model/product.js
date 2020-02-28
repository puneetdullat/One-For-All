const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({title:'Watches',src: '/img/watch.jpg', href: '/products1'});
    
         this. fakeDB.push({title:'Sunglasses',src: '/img/sunglasses.jpg', href: '/products2'});
    
        this.fakeDB.push({title:'Computer Accessories',src: '/img/computer.jpg', href: '/products3'});
        
        this.fakeDB.push({title:'Perfumes',src: '/img/perfume.jpg', href: '/products4'});
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
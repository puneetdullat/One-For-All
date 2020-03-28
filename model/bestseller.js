const sellingproducts=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({title:'Fossil',src: '/img/watch4.jpg', href: '/products1'});
    
        this. fakeDB.push({title:'Rayban Oval',src: '/img/sunglasses1.jpg', href: '/products2'});
    
        this.fakeDB.push({title:'Logitech g403',src: '/img/mouse1.jpg', href: '/products3'});
        
        this.fakeDB.push({title:'Bleu Chanel',src: '/img/perfume6.jpg', href: '/products4'});
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

sellingproducts.init();
module.exports=sellingproducts;
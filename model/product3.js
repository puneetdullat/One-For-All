const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({title:'Logitech g403',src: '/img/mouse1.jpg' ,price: '$79', best: 1,src1: '/img/bestseller.png', category: 'accessories'});
    
        this. fakeDB.push({title:'Razor Blade',src: '/img/key1.jpg',price: '$149', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
    
        this.fakeDB.push({title:'logitech M1K',src: '/img/key2.jpg',price: '$49', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
        
        this.fakeDB.push({title:'MSI Nvidia Geforce RTX 2080',src: '/img/graph1.jpg',price: '$1550', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
        
        this.fakeDB.push({title:'Crosshair Pro',src: '/img/head1.jpg',price: '$119', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
        
        this.fakeDB.push({title:'Dr. Dre',src: '/img/head2.jpg',price: '$399', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
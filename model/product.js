const products=
{
    fakeDB : {best:[], prod:[],prod1:[],prod2:[],prod3:[],prod4:[]},

    init()
    {
        this.fakeDB.best.push({title:'Fossil',src: '/img/watch4.jpg', href: '/product/products1'});
    
        this. fakeDB.best.push({title:'Rayban Oval',src: '/img/sunglasses1.jpg', href: '/product/products2'});
   
       this.fakeDB.best.push({title:'Logitech g403',src: '/img/mouse1.jpg', href: '/product/products3'});
       
       this.fakeDB.best.push({title:'Bleu Chanel',src: '/img/perfume6.jpg', href: '/product/products4'});

        this.fakeDB.prod.push({title:'Watches',src: '/img/watch.jpg', href: '/product/products1'});
    
        this. fakeDB.prod.push({title:'Sunglasses',src: '/img/sunglasses.jpg', href: '/product/products2'});
    
        this.fakeDB.prod.push({title:'Computer Accessories',src: '/img/computer.jpg', href: '/product/products3'});
        
        this.fakeDB.prod.push({title:'Perfumes',src: '/img/perfume.jpg', href: '/product/products4'});

        this.fakeDB.prod1.push({title:'Fetina',src: '/img/watch1.jpg',price: '$399', best: 0,src1: '/img/bestseller.png', category: 'watch'});
    
        this. fakeDB.prod1.push({title:'Fury',src: '/img/watch2.jpg',price: '$199', best: 0,src1: '/img/bestseller.png', category: 'watch'});
   
       this.fakeDB.prod1.push({title:'Bretling',src: '/img/watch3.jpg',price: '$499', best: 0,src1: '/img/bestseller.png', category: 'watch'});
       
       this.fakeDB.prod1.push({title:'Fossil',src: '/img/watch4.jpg',price: '$499', best: 1,src1: '/img/bestseller.png', category: 'watch'});
       
       this.fakeDB.prod1.push({title:'Black',src: '/img/watch5.jpg',price: '$349', best: 0,src1: '/img/bestseller.png', category: 'watch'});
       
       this.fakeDB.prod1.push({title:'QW',src: '/img/watch6.jpg',price: '$149', best: 0,src1: '/img/bestseller.png', category: 'watch'});

       this.fakeDB.prod3.push({title:'Logitech g403',src: '/img/mouse1.jpg' ,price: '$79', best: 1,src1: '/img/bestseller.png', category: 'accessories'});
    
       this. fakeDB.prod3.push({title:'Razor Blade',src: '/img/key1.jpg',price: '$149', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
   
       this.fakeDB.prod3.push({title:'logitech M1K',src: '/img/key2.jpg',price: '$49', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
       
       this.fakeDB.prod3.push({title:'MSI Nvidia Geforce RTX 2080',src: '/img/graph1.jpg',price: '$1550', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
       
       this.fakeDB.prod3.push({title:'Crosshair Pro',src: '/img/head1.jpg',price: '$119', best: 0,src1: '/img/bestseller.png', category: 'accessories'});
       
       this.fakeDB.prod3.push({title:'Dr. Dre',src: '/img/head2.jpg',price: '$399', best: 0,src1: '/img/bestseller.png', category: 'accessories'});

       this.fakeDB.prod4.push({title:'diGioia',src: '/img/perfume1.jpg',price: '$259', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
    
       this.fakeDB.prod4.push({title:'Leau Laurissi',src: '/img/perfume2.jpg',price: '$219', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
   
       this.fakeDB.prod4.push({title:'N5 Chanel',src: '/img/perfume3.jpg',price: '$299', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
       
       this.fakeDB.prod4.push({title:'Jo Malone',src: '/img/perfume4.jpg',price: '$349', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
       
       this.fakeDB.prod4.push({title:'Jaguar',src: '/img/perfume5.jpg',price: '$319', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
       
       this.fakeDB.prod4.push({title:'Bleu Chanel',src: '/img/perfume6.jpg',price: '$499', best: 1,src1: '/img/bestseller.png', category: 'perfume'});
       
       this.fakeDB.prod2.push({title:'Rayban Oval',src: '/img/sunglasses1.jpg', best: 1,src1: '/img/bestseller.png',price: '$249', category: 'sunglasses'});
    
       this. fakeDB.prod2.push({title:'P&D',src: '/img/sunglasses2.jpg', best: 0,src1: '/img/bestseller.png',price: '$349', category: 'sunglasses'});
   
       this.fakeDB.prod2.push({title:'Rayban Polarised',src: '/img/sunglasses3.jpg', best: 0,src1: '/img/bestseller.png',price: '$449', category: 'sunglasses'});
       
       this.fakeDB.prod2.push({title:'Indigo',src: '/img/sunglasses4.jpg', best: 0,src1: '/img/bestseller.png',price: '$199', category: 'sunglasses'});
       
       this.fakeDB.prod2.push({title:'Fossil',src: '/img/sunglasses5.jpg', best: 0,src1: '/img/bestseller.png',price: '$239', category: 'sunglasses'});
       
       this.fakeDB.prod2.push({title:'Aviators',src: '/img/sunglasses6.jpg', best: 0,src1: '/img/bestseller.png',price: '$249', category: 'sunglasses'});

    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
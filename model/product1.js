const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({title:'Fetina',src: '/img/watch1.jpg',price: '$399', best: 0,src1: '/img/bestseller.png', category: 'watch'});
    
         this. fakeDB.push({title:'Fury',src: '/img/watch2.jpg',price: '$199', best: 0,src1: '/img/bestseller.png', category: 'watch'});
    
        this.fakeDB.push({title:'Bretling',src: '/img/watch3.jpg',price: '$499', best: 0,src1: '/img/bestseller.png', category: 'watch'});
        
        this.fakeDB.push({title:'Fossil',src: '/img/watch4.jpg',price: '$499', best: 1,src1: '/img/bestseller.png', category: 'watch'});
        
        this.fakeDB.push({title:'Black',src: '/img/watch5.jpg',price: '$349', best: 0,src1: '/img/bestseller.png', category: 'watch'});
        
        this.fakeDB.push({title:'QW',src: '/img/watch6.jpg',price: '$149', best: 0,src1: '/img/bestseller.png', category: 'watch'});
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
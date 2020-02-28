const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({title:'diGioia',src: '/img/perfume1.jpg',price: '$259', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
    
        this. fakeDB.push({title:'Leau Laurissi',src: '/img/perfume2.jpg',price: '$219', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
    
        this.fakeDB.push({title:'N5 Chanel',src: '/img/perfume3.jpg',price: '$299', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
        
        this.fakeDB.push({title:'Jo Malone',src: '/img/perfume4.jpg',price: '$349', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
        
        this.fakeDB.push({title:'Jaguar',src: '/img/perfume5.jpg',price: '$319', best: 0,src1: '/img/bestseller.png', category: 'perfume'});
        
        this.fakeDB.push({title:'Bleu Chanel',src: '/img/perfume6.jpg',price: '$499', best: 1,src1: '/img/bestseller.png', category: 'perfume'});
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
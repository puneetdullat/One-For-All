const products=
{
    fakeDB:[],
    
    init()
    {

        this.fakeDB.push({title:'Rayban Oval',src: '/img/sunglasses1.jpg', best: 1,src1: '/img/bestseller.png',price: '$249', category: 'sunglasses'});
    
        this. fakeDB.push({title:'P&D',src: '/img/sunglasses2.jpg', best: 0,src1: '/img/bestseller.png',price: '$349', category: 'sunglasses'});
    
        this.fakeDB.push({title:'Rayban Polarised',src: '/img/sunglasses3.jpg', best: 0,src1: '/img/bestseller.png',price: '$449', category: 'sunglasses'});
        
        this.fakeDB.push({title:'Indigo',src: '/img/sunglasses4.jpg', best: 0,src1: '/img/bestseller.png',price: '$199', category: 'sunglasses'});
        
        this.fakeDB.push({title:'Fossil',src: '/img/sunglasses5.jpg', best: 0,src1: '/img/bestseller.png',price: '$239', category: 'sunglasses'});
        
        this.fakeDB.push({title:'Aviators',src: '/img/sunglasses6.jpg', best: 0,src1: '/img/bestseller.png',price: '$249', category: 'sunglasses'});
    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;
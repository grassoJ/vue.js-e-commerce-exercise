var product = "Socks";



var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: "fuzzy wuzzy white socks, they're super!",
        image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        inventory: 0,
        link: "https://www.amazon.com.au/",
        onSale: true,
        inStock: true,
        details: ["95% cotton", "5% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"green",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor:"blue",
                 variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            },
            {
                variantId: 2236,
                variantColor:"white",
                 variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            },
        ],
        sizes: ['small', 'medium', 'large'],
        cart: 0,
    },
    methods: {
        addToCart: function (){
            this.cart += 1
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        }
    }
})

var app2 = new Vue ({
    el:'#app2',
    data:{
        product: "Game of Thrones: Season 1",
        sku:     "9325336130810",
        price:    39.49,
        onSale: true,
        cart: 0,
    },
    methods: {
        addToCart: function (){
            this.cart += 1
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        },
        buyTenSale: function() {
            if(this.cart >= 10){
                this.price = 21.99
            }
        }
    }
    
})
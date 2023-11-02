

const product = [
  {
      id: 0,
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030_Hair%20Serum%2030_hgt8xk.jpg?tr=w-500',
      title: 'Stage 2 Hair Regrowth Kit',
      price: 120,
  },
  {
      id: 1,
      image: 'https://i.mscwlns.co/mosaic-wellness/image/upload/v1653060171/Man%20Matters/Hero%20image%20change/Hair%202/141464/Hair-Gummies-30-Pack-_-Growmax-Minoxidil-60ml-Kit_1600X1200.jpg?tr=w-500',
      title: 'Stage 3 Hair Regrowth Kit',
      price: 60,
  },
  {
      id: 2,
      image: 'https://i.mscwlns.co/media/misc/pdp/13410495/Untitled_design__17__8YUhXs-NB.png?tr=w-500',
      title: 'Multivitamin Gummies (60 N)',
      price: 230,
  },
  {
      id: 3,
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166956/Front%20Image1_l6fw0d.jpg?tr=w-500',
      title: 'Stage 1 Hairloss Kit for Genetics',
      price: 100,
  }
];

const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;

  document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<a href="product1.html" class="some">
      <div class='box'>
      <div class='img-box'>
        
          <img class='images' src=${image}></img>
        
      
         
              </div>
          <div class='bottom'>
          <p>${title}</p>
          </a>
          <h2>₹ ${price}.00</h2>
          
          
          `+
          "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
          `
          
          </div>
      </div>
      `
  )
}).join('')

var cart =[];
function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "₹ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "₹ "+total+".00";
          return(
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p>${title}</p>
                <h2>₹ ${price}.00</h2>`+
                "<i class='del ri-delete-bin-7-line' onclick='delElement("+ (j++) +")'></i></div>"
            
              
             
          );
      }).join('');
  }

  
}
function openNav() {
  document.getElementById("mySidebar").style.width = "600px";
  document.getElementById("main").style.marginLeft = "600px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


const product2 = [
  {
      id: 0,
      image: 'https://www.netmeds.com/images/product-v1/600x600/324927/ab_phylline_100mg_capsule_10s_583883_1_0.jpg',
      title: "AB Phylline 100mg Capsule 10'S",
      price: 120,
  },
  {
      id: 1,
      image: 'https://www.netmeds.com/images/product-v1/600x600/840187/allcitra_syrup_100ml_0_0.jpg',
      title: 'Allcitra Syrup 100ml',
      price: 60,
  },
  {
      id: 2,
      image: 'https://www.netmeds.com/images/product-v1/600x600/1125022/icos_1g_capsule_4s_703451_0_0.jpg',
      title: "ICOS 1g Capsule 4's",
      price: 230,
  },
  {
      id: 3,
      image: 'https://www.netmeds.com/images/product-v1/600x600/1026702/neprosite_tablet_10s_465929_1_0.jpg',
      title: "NEPROSITE Tablet 10's",
      price: 100,
  }
];
const categories2 = [...new Set(product2.map((item)=>
  {return item}))]
  let k=0;
  document.getElementById('root2').innerHTML = categories2.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>₹ ${price}.00</h2>
      
      `+
      "<button onclick='addtocart("+(k++)+")'>Add to cart</button>"+
      `
      
      </div>
      </div>`
  )
}).join('')

var cart =[];
function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let l = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "₹ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "₹ "+total+".00";
          return(
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p>${title}</p>
                <h2>₹ ${price}.00</h2>`+
                "<i class='del ri-delete-bin-7-line' onclick='delElement("+ (l++) +")'></i></div>"
            
              
             
          );
      }).join('');
  }

  
}


const product3 = [
  {
      id: 0,
      image: 'https://www.netmeds.com/images/product-v1/600x600/324927/ab_phylline_100mg_capsule_10s_583883_1_0.jpg',
      title: "AB Phylline 100mg Capsule 10'S",
      price: 120,
  },
  {
      id: 1,
      image: 'https://www.netmeds.com/images/product-v1/600x600/840187/allcitra_syrup_100ml_0_0.jpg',
      title: 'Allcitra Syrup 100ml',
      price: 60,
  },
  {
      id: 2,
      image: 'https://www.netmeds.com/images/product-v1/600x600/1125022/icos_1g_capsule_4s_703451_0_0.jpg',
      title: "ICOS 1g Capsule 4's",
      price: 230,
  },
  {
      id: 3,
      image: 'https://www.netmeds.com/images/product-v1/600x600/1026702/neprosite_tablet_10s_465929_1_0.jpg',
      title: "NEPROSITE Tablet 10's",
      price: 100,
  }
];
const categories3 = [...new Set(product3.map((item)=>
  {return item}))]
  let p=0;
  document.getElementById('root3').innerHTML = categories3.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>₹ ${price}.00</h2>
      
      `+
      "<button onclick='addtocart("+(p++)+")'>Add to cart</button>"+
      `
      
      </div>
      </div>`
  )
}).join('')

var cart =[];
function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let w = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "₹ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "₹ "+total+".00";
          return(
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p>${title}</p>
                <h2>₹ ${price}.00</h2>`+
                "<i class='del ri-delete-bin-7-line' onclick='delElement("+ (w++) +")'></i></div>"
            
              
             
          );
      }).join('');
  }

  
}
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
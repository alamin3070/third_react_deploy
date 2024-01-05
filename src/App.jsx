import './App.css';
import Card from './components/Card';
function App() {
  const cardData=[
    {
    name:"Nike",
    price:2000,
    des:"Nike World Is your Choice",
    imageUrl:"https://e7.pngegg.com/pngimages/812/769/png-clipart-sports-shoes-skechers-women-s-mesh-high-apex-bungee-slip-on-blue-loafer-nike-relaxed-fit-skechers-shoes-for-women.png",
  },
  {
    name:"Bata",
    price:1000,
    des:"Bata World Is your Choice",
    imageUrl:"https://www.batabd.com/cdn/shop/products/3_d6cdfc1f-17ec-47cf-beda-6db6ab172d97_1024x1024.jpg?v=1681808833",
  },
  {
    name:"Apex",
    price:2000,
    des:"Apex World Is your Choice",
    imageUrl:"https://e7.pngegg.com/pngimages/812/769/png-clipart-sports-shoes-skechers-women-s-mesh-high-apex-bungee-slip-on-blue-loafer-nike-relaxed-fit-skechers-shoes-for-women.png",
  },
  {
    name:"Evaly",
    price:2500,
    des:"Apex World Is your Choice",
    imageUrl:"https://storage.apex4u.com/94595A68_1.jpeg",
  },
  {
    name:"Nike",
    price:3000,
    des:"Apex World Is your Choice",
    imageUrl:"https://w7.pngwing.com/pngs/471/670/png-transparent-nike-flywire-shoe-nike-acg-boot-nike-white-outdoor-shoe-sneakers-thumbnail.png",
  },
  {
    name:"Apex",
    price:2000,
    des:"Apex World Is your Choice",
    imageUrl:"https://png.pngitem.com/pimgs/s/584-5840315_veiligheidsschoenen-bata-dames-hd-png-download.png",
  },
];

  return (
    <>
    <h1 className='text-center text-3xl'> Card with image overlay </h1>
    <div className='container flex justify-center gap-3 mt-3 flex-wrap'>
    {
      cardData.map((shoe)=>(<Card cardInfo={shoe} />))
    }
    </div>
    
    </>
  );
}

export default App;

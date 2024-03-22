import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
        <Navbar></Navbar>
    <div className='w-3/4 m-auto px-4'>
      
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-blue-200 h-[450px] text-black rounded-xl">
            <div className='h-56 bg-blue-600 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4 ">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className='bg-green-500 text-white text-lg px-4 rounded-xl '>Approve</button>
              <button className='bg-red-500 text-white text-lg px-4 rounded-xl '>Deny</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </div>
  );
}

const data = [
  {
    name: `House 1`,
    img: `/src/assets/Landing-page-bg.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `House 2`,
    img: `/src/assets/Landing-page-bg.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `House 3`,
    img: `/src/assets/Landing-page-bg.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `House 4`,
    img: `/src/assets/Landing-page-bg.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `House 5`,
    img: `/src/assets/Landing-page-bg.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default App;

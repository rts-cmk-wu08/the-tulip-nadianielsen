import Gallery from "./components/Gallery";
import HeroHeader from "./components/HeroHeader";
import OurRooms from "./components/OurRooms";
import OurServices from "./components/OurServices";
import RoomTypes from "./components/RoomTypes";
import Spots from "./components/Spots";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <HeroHeader />
    <main>
      <OurRooms />
      <RoomTypes />
      <OurServices />
      <Spots />
      <Gallery />
      <Reviews />
    </main>
    <Footer />
    </>
  )
}

export default App;

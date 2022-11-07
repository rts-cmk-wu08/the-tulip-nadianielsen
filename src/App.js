import Gallery from "./components/Gallery";
import HeroHeader from "./components/HeroHeader";
import OurRooms from "./components/OurRooms";
import OurServices from "./components/OurServices";
import Reviews from "./components/Reviews";
import RoomTypes from "./components/RoomTypes";
import Spots from "./components/Spots";

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
    </>
  )
}

export default App;

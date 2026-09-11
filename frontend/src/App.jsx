import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

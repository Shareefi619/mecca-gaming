import AboutUS from "./pages/about";
import Home from "./pages/home";
import TeamDetails from "./pages/teamDetails";
import PlayerDetails from "./pages/playerDetails";
import HistorySection from "./pages/history";
import Award from "./pages/award";
import Faq from "./pages/faq";
import Gallery from "./pages/gallery";
import Event from "./pages/event";
import EventDetails from "./pages/eventDetails";
import Error from "./pages/error";
import MatchSchedule from "./pages/matchSchedule";
import MatchResult from "./pages/matchResult";
import LeagueStandings from "./pages/leagueStandings";
import Shop from "./pages/shop";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkOut";
import Account from "./pages/account";
import ThankYou from "./pages/thankYou";
import News from "./pages/news";
import NewsDetails from "./pages/newsDetails";
import ContactUs from "./pages/contactUs";
import Login from "./pages/login";
import SecondHome from "./pages/secondHome";
import ThirdHome from "./pages/thirdHome";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUS />} />
        <Route path="teamDetails" element={<TeamDetails />} />
        <Route path="playerDetails" element={<PlayerDetails />} />
        <Route path="history" element={<HistorySection />} />
        <Route path="award" element={<Award />} />
        <Route path="faq" element={<Faq />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="event" element={<Event />} />
        <Route path="eventDetails" element={<EventDetails />} />
        <Route path="error" element={<Error />} />
        <Route path="matchSchedule" element={<MatchSchedule />} />
        <Route path="matchResult" element={<MatchResult />} />
        <Route path="leagueStanding" element={<LeagueStandings />} />
        <Route path="shop" element={<Shop />} />
        <Route path="productDetails" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="account" element={<Account />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="news" element={<News />} />
        <Route path="newsDetails" element={<NewsDetails />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="/home-two" element={<SecondHome />} />
        <Route path="/home-three" element={<ThirdHome />} />
      </Routes>
    </>
  );
};

export default App;

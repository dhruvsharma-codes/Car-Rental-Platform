import Banner from "../components/Banner/Banner";
import CardSection from "../components/CardSection/CardSection";
import DownloadSection from "../components/DownloadSection/DownloadSection";
import Hero from "../components/Hero/Hero";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import InfoBlock2 from "../components/InfoBlock2/InfoBlock2";
import SubscriptionBanner from "../components/SubscriptionBanner/SubscriptionBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoBlock />
      <InfoBlock2 />
      <CardSection />
      <Banner />
      <DownloadSection />
      <SubscriptionBanner />
    </div>
  );
};

export default Home;

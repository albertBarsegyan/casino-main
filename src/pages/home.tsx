import {NavBar} from "../components/navbar";
import {BannerSection} from "../components/banner-section";
import {NewReleasesSection} from "../components/new-releases-section";
import {LatestNewsSection} from "../components/latest-news-section";

export function Home() {
  return (
    <div>
      <NavBar/>
      <BannerSection/>
      <NewReleasesSection/>
      {/*<OnSaleSection/>*/}
      {/*<BestSellersSection/>*/}
      {/*<LastChanceSection/>*/}
      <LatestNewsSection/>
      {/*<Footer/>*/}
    </div>
  );
};

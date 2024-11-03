import {NavBar} from "../components/navbar";
import {BannerSection} from "../components/banner-section";
import {OurGamesSection} from "../components/our-games-section";
import {LatestNewsSection} from "../components/latest-news-section";
import {SectionLayout} from "../components/section-layout";
import {OnSaleSection} from "../components/on-sale-section";
import {NewReleasesSection} from "../components/new-releases-section";
import {BestSellersSection} from "../components/best-sellers-section";
import {LastChanceSection} from "../components/last-chance-section";


export function Home() {
  return (
    <div>
      <NavBar/>
      <BannerSection/>
      <OurGamesSection/>
      <SectionLayout variant='small'>
        <NewReleasesSection/>
        <OnSaleSection/>
        <BestSellersSection/>
        <LastChanceSection/>
      </SectionLayout>
      <LatestNewsSection/>
      {/*<Footer/>*/}
    </div>
  );
};

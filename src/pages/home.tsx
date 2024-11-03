import {NavBar} from "../components/navbar";
import {BannerSection} from "../components/banner-section";
import {NewReleasesSection} from "../components/new-releases-section";
import {LatestNewsSection} from "../components/latest-news-section";
import {SectionLayout} from "../components/section-layout";

// import {OnSaleSection} from "../components/on-sale-section";

export function Home() {
  return (
    <div>
      <NavBar/>
      <BannerSection/>
      <NewReleasesSection/>
      <SectionLayout variant='small'>
        {/*<OnSaleSection/>*/}
        {/*<BestSellersSection/>*/}
        {/*<LastChanceSection/>*/}
      </SectionLayout>
      <LatestNewsSection/>
      {/*<Footer/>*/}
    </div>
  );
};

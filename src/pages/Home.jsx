import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Info from "../components/Info";
import HomeProducts from "../components/HomeProduct";

function HomePage() {
   return (
      <div>
         <Banner />
         <Categories />
         <HomeProducts />
         <Info />
      </div>
   );
}

export default HomePage;

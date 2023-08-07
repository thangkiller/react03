import Menu from "../components/Menu";
import ShopProduct from "../components/ShopProduct";

function ShopPage() {
   return (
      <div
         className="container"
         style={{ display: "flex", backgroundColor: "#fffffd" }}
      >
         <Menu />
         <ShopProduct />
      </div>
   );
}

export default ShopPage;

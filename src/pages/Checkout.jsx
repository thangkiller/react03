import Checkout from "../components/Checkout";

function CheckoutPage() {
   return (
      <div>
         <div
            className="container"
            style={{
               backgroundColor: "var(--banner-background)",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               padding: "4rem",
            }}
         >
            <h1>Cart</h1>
            <h4>
               HOME/CART/<span style={{ opacity: "0.6" }}>CHECHOUT</span>
            </h4>
         </div>
         <Checkout />
      </div>
   );
}

export default CheckoutPage;

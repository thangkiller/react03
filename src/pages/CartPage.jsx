import Cart from "../components/Cart";

function CartPage() {
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
            <h4 style={{ opacity: "0.6" }}>Cart</h4>
         </div>
         <Cart />
      </div>
   );
}

export default CartPage;

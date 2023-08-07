const URL =
   "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const priceToString = (price) => {
   let priceString = price;
   if (typeof priceString === "number") {
      priceString = priceString.toString();
   }
   let priceStr = "";
   let currentIndex = priceString.length - 1;
   let dotIndex = 0;
   while (currentIndex > -1) {
      priceStr = priceString[currentIndex] + priceStr;
      dotIndex++;
      if (dotIndex === 3) {
         if (currentIndex !== 0) {
            priceStr = "." + priceStr;
         }
         dotIndex = 0;
      }
      currentIndex--;
   }
   return priceStr;
};

export default URL;
export { priceToString };

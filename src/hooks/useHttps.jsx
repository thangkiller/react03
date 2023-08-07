import { useCallback, useState } from "react";

function useHttps(requestConfig, applyData) {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");

   // log error
   if (!requestConfig.url) {
      console.error("requestConfig has not url!");
   }

   const sendRequest = useCallback(async () => {
      setIsLoading(true);
      const res = await fetch(requestConfig.url, {
         method: requestConfig.method || "GET",
         headers: requestConfig.headers || {},
         body: requestConfig.body,
      });
      const data = await res.json();
      if (data.error) {
         setError(data.error.message);
         setIsLoading(false);
         applyData(null);
      }
      if (!res.ok) {
         setError("Could not get data event!");
         setIsLoading(false);
         applyData(null);
      }
      applyData(data);
   }, [requestConfig, applyData]);

   return {
      isLoading,
      sendRequest,
      error,
   };
}

export default useHttps;

import { useEffect, useState } from "react";
import { FreeShippingApi } from "./testApi";

const App = () => {
  const [, setHtml] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FreeShippingApi.getAppFreeShippingList();
        setHtml(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetchingfrom API:", error);
      }
    };

    fetchData();
  }, []);
  return <div className="absolute -z-10">App</div>;
};

export default App;

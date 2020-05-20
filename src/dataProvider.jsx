import simpleRestProvider from "ra-data-simple-rest";
import {fetchUtils} from "react-admin"


const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: "application/json" });
    }
    const accessToken = localStorage.getItem("accessToken");
  
    options.headers.set("Authorization", `Bearer ${accessToken}`);
  
    return fetchUtils.fetchJson(url, options);
  };
  
  const dataProvider = simpleRestProvider(
    "http://localhost:5000/admins",
    httpClient
  );


  export default dataProvider;
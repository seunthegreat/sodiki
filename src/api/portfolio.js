import axios from "axios";
import { API_SERVER } from "../constants";

class PortfolioApi {
  static getAllPortfolios = async () => {
    const data = await axios.get(`${API_SERVER}/getAllPortfolios`);
    return data;
  };
}

export default PortfolioApi;

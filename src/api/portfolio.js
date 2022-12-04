import axios from "axios";
import { API_SERVER } from "../constants";

class PortfolioApi {
  static Login = async (body) => {
    const data = await axios.post(`${API_SERVER}/getAllPortfolios`, body);
    return data;
  };
}

export default PortfolioApi;

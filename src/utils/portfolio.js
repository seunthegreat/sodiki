import PortfolioApi from "../api/portfolio";

const calculateBarPercentage =  (x) => {
  //-- where formula (x/45) * 100--//
  let result = (parseInt(x)/45) * 100;
  return result;
};

const calculateBarWidth = (x) => {
  //--256px is the length of the full bar--//
  let baseWidth = fullWidth();
  let width = x/100*baseWidth;
  if (x == 100) return width;
  if (x > 70 && x < 100 ) return width;
  if (x <= 70 && x >= 50 ) return width;
  if (x >= 30 && x < 50) return width;
  if (x < 30 && x > 0) return width;
  if (x == 0) return 0;
  else return "out of range";
};
  
const getDatasetArray = (risk, portfolioArray) => {
  let dataset = [];
  let assetClasses = {};

  for(let i = 0; i < portfolioArray.length; i++){
  //--Check if risk match value of "Risk Score"--//
    if(risk == portfolioArray[i]["Risk Score"]) {  
    
      //--For True Case, we filter the data to contain our preferred keys--//
      const allowed = [ "Nigerian Stocks", "Foreign Stocks", "Tech Stocks", 
        "Emerging Stocks","Nigerian Bonds", "Commodities", "Real Estate", "T-Bills", "Alternative" ];
    
      //--We save the filtered keys into variable named assetClasses--//
      assetClasses =  allowed.reduce((obj, key) => (
        { ...obj, [key]: portfolioArray[i][key] }), //--> the reduce function automatically sorts our array
        {});

       
    
      for (const [key, value] of Object.entries(assetClasses)) {
        //--Remove the percentage symbol from every key value--//
        let allocationValue = value.substring(0, value.length - 1); 
             
        //--Calculate for barWidth, then push result to data set--//
        let barPercentage = calculateBarPercentage(allocationValue);
        let barWidth = calculateBarWidth(barPercentage);
        dataset.push({barWidth, allocationValue})
      }
    }
  }
  return dataset
};

const fetchPortfolioData = async (setIsLoading, setPortfolioData, setDataset) => {
  let portfolioData = [];
  let dataset = [];

  try{
    setIsLoading(true)
    let response = await PortfolioApi.getAllPortfolios();
    setIsLoading(false)
    portfolioData = response.data.data;
    dataset = Portfolio.getDataset(5, portfolioData)

    setPortfolioData(portfolioData);
    setDataset(dataset);

  }catch (e){
    console.log(e)
  }
}

const Portfolio = {
  getBarPercentage : (x) => calculateBarPercentage(x),
  getBarWidth: (x) => calculateBarWidth(x),
  getDataset: (risk, portfolio) => getDatasetArray(risk, portfolio),
  getPortfolioData: async (
    setIsLoading, 
    setPortfolioData, 
    setDataset) => fetchPortfolioData(setIsLoading, setPortfolioData, setDataset)
};

const fullWidth = () => {
  if (window.innerWidth >= 400 && window.innerWidth < 620) return 160
  if (window.innerWidth >= 620 && window.innerWidth < 768) return 384
  return 384
};

export default Portfolio;
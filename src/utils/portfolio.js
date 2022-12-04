const sampleData = [
    {
        "_id": "638a5cca09cce9e4611e6893",
        "Risk Score": "0",
        "Nigerian Stocks": "18%",
        "Foreign Stocks": "4%",
        "Tech Stocks": "2%",
        "Emerging Stocks": "7%",
        "Nigerian Bonds": "35%",
        "Commodities": "7%",
        "Real Estate": "12%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5cca09cce9e4611e6894",
        "Risk Score": "1",
        "Nigerian Stocks": "20%",
        "Foreign Stocks": "5%",
        "Tech Stocks": "3%",
        "Emerging Stocks": "7%",
        "Nigerian Bonds": "35%",
        "Commodities": "12%",
        "Real Estate": "12%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5cca09cce9e4611e6895",
        "Risk Score": "2",
        "Nigerian Stocks": "23%",
        "Foreign Stocks": "5%",
        "Tech Stocks": "4%",
        "Emerging Stocks": "7%",
        "Nigerian Bonds": "35%",
        "Commodities": "12%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5cca09cce9e4611e6896",
        "Risk Score": "3",
        "Nigerian Stocks": "26%",
        "Foreign Stocks": "6%",
        "Tech Stocks": "4%",
        "Emerging Stocks": "7%",
        "Nigerian Bonds": "35%",
        "Commodities": "12%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5cca09cce9e4611e6897",
        "Risk Score": "4",
        "Nigerian Stocks": "29%",
        "Foreign Stocks": "7%",
        "Tech Stocks": "5%",
        "Emerging Stocks": "6%",
        "Nigerian Bonds": "35%",
        "Commodities": "12%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5ccb09cce9e4611e6898",
        "Risk Score": "5",
        "Nigerian Stocks": "31%",
        "Foreign Stocks": "8%",
        "Tech Stocks": "6%",
        "Emerging Stocks": "5%",
        "Nigerian Bonds": "35%",
        "Commodities": "12%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5ccb09cce9e4611e6899",
        "Risk Score": "6",
        "Nigerian Stocks": "35%",
        "Foreign Stocks": "8%",
        "Tech Stocks": "7%",
        "Emerging Stocks": "3%",
        "Nigerian Bonds": "35%",
        "Commodities": "0%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5ccb09cce9e4611e689a",
        "Risk Score": "7",
        "Nigerian Stocks": "45%",
        "Foreign Stocks": "13%",
        "Tech Stocks": "12%",
        "Emerging Stocks": "7%",
        "Nigerian Bonds": "23%",
        "Commodities": "0%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5ccb09cce9e4611e689b",
        "Risk Score": "8",
        "Nigerian Stocks": "45%",
        "Foreign Stocks": "15%",
        "Tech Stocks": "15%",
        "Emerging Stocks": "9%",
        "Nigerian Bonds": "16%",
        "Commodities": "0%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5ccb09cce9e4611e689c",
        "Risk Score": "9",
        "Nigerian Stocks": "45%",
        "Foreign Stocks": "18%",
        "Tech Stocks": "17%",
        "Emerging Stocks": "11%",
        "Nigerian Bonds": "9%",
        "Commodities": "0%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    },
    {
        "_id": "638a5ccb09cce9e4611e689d",
        "Risk Score": "10",
        "Nigerian Stocks": "45%",
        "Foreign Stocks": "20%",
        "Tech Stocks": "19%",
        "Emerging Stocks": "14%",
        "Nigerian Bonds": "2%",
        "Commodities": "0%",
        "Real Estate": "0%",
        "T-Bills": "0%",
        "Alternative": "0%",
        "__v": 0
    }
];


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

const Portfolio = {
  getBarPercentage : (x) => calculateBarPercentage(x),
  getBarWidth: (x) => calculateBarWidth(x),
  getDataset: (risk, portfolio) => getDatasetArray(risk, portfolio),
};

const fullWidth = () => {
  if (window.innerWidth >= 400 && window.innerWidth < 620) return 160
  if (window.innerWidth >= 620 && window.innerWidth < 768) return 384
  return 256
}

// console.log(fullWidth())

export default Portfolio;
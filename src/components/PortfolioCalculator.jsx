import React, {useState} from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { Slider, RangeSlider } from 'rsuite';
import BarChart from "./BarChart";

const portfolio = [
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
]

const createStyledDataSet = (risk, portfolio) => {
  let dataset = []
  for(let i = 0; i < portfolio.length; i++){
    if(risk == portfolio[i]["Risk Score"]) {
      
     
      const allowed = ["Nigerian Stocks", "Foreign Stocks", "Tech Stocks", "Emerging Stocks",
      "Nigerian Bonds", "Commodities", "Real Estate", "T-Bills", "Alternative" ];

      const assetClasses =  allowed.reduce((obj, key) => (
        { ...obj, [key]: portfolio[i][key] }), {});

        
        for (const [key, value] of Object.entries(assetClasses)) {

          let allocationValue = value.substring(0, value.length - 1);
         
          let barPercentage = calculateBarPercentage(allocationValue);
          let barWidth = determineBarWidth(barPercentage);
          dataset.push(barWidth)
        }
    }
  }

  return dataset
}

const calculateBarPercentage = (x) => {
  //-- where formula (x/45) * 100
  let result = (parseInt(x)/45) * 100
  return result;
};

const determineBarWidth = (x) => {
  /**
   * fixed with with tailwind configuration 
   * w-24, w-32, w-40, w-48, w-64
   *  where w-65 is max width i.e 100%
   */
  if (x == 100) return 'w-64';
  if (x > 70 && x < 100 ) return 'w-44';
  if (x <= 70 && x >= 50 ) return 'w-32';
  if (x >= 30 && x < 50) return 'w-24';
  if (x < 30 && x > 0) return 'w-14';
  if (x == 0) return 0;
  else return "out of range";
}

// console.log(createStyledDataSet(8,portfolio))



// console.log(determineAssetAllocation(0, portfolio))

const MIN = 0;
const MAX = 10;

const PortfolioCalculator = () => {
  const [risk, setRisk] = useState(MIN);
  const [data, setData] = useState(createStyledDataSet(0,portfolio))

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Know-thy-self <br className="sm:block hidden"/> in few steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           Simply provide us with some information, and we'll create a custom portfolio for you that includes low-cost, 
           awesome diversified index funds that are meant to increase your wealth over the long run.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
      <div className='flex flex-row items-center justify-center py-[20px] px-4 rounded-[10px] w-full h-full static'>
        <div className="w-96 bg-white shadow rounded py-[10px] px-4 justify-between items-center absolute top-[0] ">
          <div className="flex-row flex justify-between items-center mb-2">
            <h4 className="font-medium">Risk Score: {risk} </h4>
            <h4 className="text-[12px] font-normal">Example Portfolio </h4>
          </div>
          <input
            type="range" 
            min={MIN} 
            max={MAX}
            value={risk}
            onChange={(e) => {
              setRisk(e.target.value);
              setData(createStyledDataSet(e.target.value,portfolio));
            }}
            className="w-full" 
            id="customSlider" 
          />
        </div>

        <div className='flex  mt-10 pt-[10px] px-8 bg-discount-gradient rounded-[10px] w-full h-full static'>
          <BarChart data={data}/>
        </div>
        
      </div>
      </div>
    </section>
  )
}

export default PortfolioCalculator
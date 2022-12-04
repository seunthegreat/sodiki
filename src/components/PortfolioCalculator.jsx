import React, {useState, useEffect} from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import BarChart from "./BarChart";
import Portfolio from "../utils/portfolio";
import PortfolioApi from "../api/portfolio";
import { Player } from '@lottiefiles/react-lottie-player';


const { getDataset, getPortfolioData } = Portfolio;

const MIN = 0;
const MAX = 10;

const PortfolioCalculator = () => {

  const [risk, setRisk] = useState(5);
  const [portfolioData, setPortfolioData] = useState([]);
  const [dataset, setDataset] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    getPortfolioData(setIsLoading, setPortfolioData, setDataset);
  },[MIN])

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

      {isLoading && (
        <div className="w-[100%] h-[100%] relative z-[5]">
          <Player
            autoplay
            loop
            src="https://lottie.host/487097d2-882c-4dd7-8211-31b7d092af8e/6hMlIcZa7I.json"
          />
       </div>
      )}

      { !isLoading && (
        <div className='flex flex-row items-center justify-center py-[20px] px-4 rounded-[10px] w-full h-full static'>
          <div className="flex-1 w-[85%] bg-white shadow rounded py-[10px] px-4 justify-between items-center absolute top-[0] ">
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
                setDataset(getDataset(e.target.value,portfolioData));
              }}
              className="w-full" 
              id="customSlider" 
            />
          </div>

          <div className='flex mt-10 items-center pt-[10px] px-8 bg-discount-gradient rounded-[10px] w-full h-full'>
            <BarChart data={dataset}/>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}

export default PortfolioCalculator

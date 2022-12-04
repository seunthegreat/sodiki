import React from 'react';
import { motion, AnimatePresence} from "framer-motion";
import { labels } from '../constants';

const merge = (labels, data) => {
  let datasetArr = [];

  for (let i = 0 ; i < labels.length ; i++){
    let dataset = {label: '', width: '', percentage: ''}
      dataset.label = labels.sort()[i];
      dataset.width = data[i].barWidth;
      dataset.percentage = data[i].allocationValue;
      datasetArr.push(dataset)
    }
    return datasetArr
};

const BarChart = ({data}) => {
  const datasetArr = merge(labels, data);
  
  return (
  <div className='flex flex-col pb-5'>
    {datasetArr.map((data, index) => (
      <AnimatePresence key={index}>
        <div key={index} className={`h-8 items-center flex flex-row justify-between w-full ${index !== 0 ? 'mt-2' : 'mt-10'}`}>
        {
          data.width !== 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`flex justify-items-start items-center h-10 flex w-24`}>
              <span className="text-white text-[11px]">{data.label}</span>
            </motion.div>
          )
        }
        {
          data.width !== 0 ? (
            <div className='flex-row flex items-center'>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              className={`flex flex-row h-8 xs:w-40 ss:w-96 sm:w-96 w-72 bg-black`}>
                <motion.div className={`h-8  barColor`} animate={{width: data.width }}>
                
                </motion.div>
              </motion.div>
              <span className="ml-1 text-white text-[9px] w-20">{data.percentage}%</span>
            </div>
          ) : (
            <div className={ `flex flex-row`}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={``}>
                  <span className="text-white text-[11px]">{data.label} 0%</span>
              </motion.div>
            </div>
          )
        }
      </div>
      </AnimatePresence>
    ))}
   </div>
  )
}

export default BarChart
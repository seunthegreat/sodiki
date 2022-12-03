import React from 'react';

const labels = 
  ["Nigerian Stocks", "Foreign Stocks", "Tech Stock", "Emerging Stocks",
  "Nigerian Bonds", "Commodities", "Real Estate", "T-Bills", "Alternative" ];

const merge = (labels, data) => {
  let datasetArr = [];
    
  for (let i = 0 ; i < labels.length ; i++){
    let dataset = {label: '', width: ''}
      dataset.label = labels.sort()[i]
      dataset.width = data[i]
      datasetArr.push(dataset)
    }
    return datasetArr
  }


const BarChart = ({data}) => {

  const datasetArr = merge(labels, data);

 
  return (
  <div className='flex flex-col'>
    {datasetArr.map((data, index) => (
      <div key={index} className={`h-8 items-center flex flex-row justify-between w-full ${index !== 0 ? 'mt-2' : 'mt-10'}`}>
      {
        data.width !== 0 && (
          <div className={`flex justify-items-start items-center h-10 flex w-24`}>
            <span className="text-white text-[11px]">{data.label}</span>
          </div>
        )
      }
      {
        data.width !== 0 && (
          <div className={`h-8 w-64 bg-black rounded-[10px]`}>
        <div className={`h-8 ${data.width} ${data.width !== 0 ? 'bg-white' : 'bg-black' }`}/>
      </div>
        )
      }
     </div>
    ))}
   </div>
  )
}

export default BarChart
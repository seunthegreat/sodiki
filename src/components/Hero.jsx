import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from "./GetStarted";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:[text-72px] text-[52px] text-gradient ss:leading-[100px] leading-[75px]">
          <span className='text-gradient'>Sodiki.</span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-normal ss:[text-68px] text-[35px] text-white ss:leading-[50px] leading-[75px] w-full">
        The intelligent planner <br className="sm:block hidden" /> {" "} for your money.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[15px]`}>
        Our team of experts built the money partner you wish you 
        can keep a secret. With specifically crafted portfolios aimed for long-term growth. 
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/> */}
      <div className="w-[100%] h-[100%] relative z-[5]">
        <Player
          autoplay
          loop
          src="https://lottie.host/7917a9bc-7ed8-4539-a4f9-896fb59b14c1/K8yOro11NJ.json"
        />
      </div>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/> */}
      <div className="absolute z-[1] w-[20%] h-[80%] rounded-full bottom-40 white__gradient"/>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero
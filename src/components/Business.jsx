import {apple, bill, google } from "../assets";
import styles, {layout} from "../style";
import { Player } from '@lottiefiles/react-lottie-player';

const Business = () => (
  <section id="product" className={layout.sectionReverse}>
  
    <div className={layout.sectionImgReverse}>
      <div className="w-[100%] h-[100%] relative z-[5] ">
          <Player
            autoplay
            loop
            src="https://lottie.host/d572137b-afc0-4416-b025-e2ee624e998d/GFDMkL4kGy.json"
          />
        </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>More time for you, <br className="sm:block hidden" />More Money too.</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Keep your focus on what matters, and let us handle the hassle of managing your investments
        with our advanced technology. We do the heavy-lifting while you keep your eyes on on the biger picture 
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
      </div>
    </div>

  </section>
)

export default Business
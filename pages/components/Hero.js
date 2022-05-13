import styles from '../../styles/Hero.module.css'
import Image from "next/image";

const Hero = () => {

let pic = "/Images/Group 1006.png";

  return (
    <div className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.headLeft}>
            <div>Don&apos;t just Integrate</div>
            <div className={styles.colorchange}>Accelerate your CRM</div>
          </div>
          <div className={styles.text}>
            <p>Propel your sales team into a state of flow with CRM Accelerations.Switch out boring hours of repetitive work with high-impact activities.Build a repeatable sales process</p>
          </div>

          <div className={styles.primary_btn}>
            <div className={styles.start}>Get Started</div>
          </div>
        </div>
        <div className={styles.right}>
        <div className={styles.images}>
          <Image src={pic} alt="my logo" width="600" height="600" />
        </div>
        </div>
    </div>

  )
}

export default Hero
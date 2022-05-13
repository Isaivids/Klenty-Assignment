import styles from '../../styles/Profiles.module.css'
import Image from 'next/image'
import { useState } from "react";
function Profiles() {

const [index, setIndex] = useState(0);

const profiles = [
  {
    id: 1 , img:"/Adam.png", imgname: "Adam Weinger", desc:"President,Double The Donation ", content:"Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%", logo:"/double-logo.png"
  },
  {
    id: 2 , img:"/gavin.png", imgname: "Sam W", desc:"Head of Demand Generation , Jump", content:"From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner", logo:"/jump-logo.png"
  },
  {
    id: 3 , img:"/Adam.png", imgname: "Gavin Tye", desc:"Sales Director , Red Eye ", content:"It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills ", logo:"/red-eye.png"
  },
]

const handleArrow = (direction) =>{
  if(direction==="L"){
      setIndex(index !== 0 ? index-1 : 2)
  }
  if(direction==="R"){
      setIndex(index !== 2 ? index+1 : 0)
  }
}

  return (
    <div className={styles.profiles}>
      <div className={styles.head2}>
        <p >What our customers have to say</p>
      </div>
      <div className={styles.prof} style={{transform:`translateX(${-84*index}vw)`}}>
        {profiles.map((y)=>{
          return(
            <div className={styles.pp} key={y.id}>
              <div className={styles.ppleft}>
                <div className={styles.quotes}>
                  <Image src="/Vector.png" width="57" height="45" alt="src"/>
                </div>
                <div className={styles.pplefttext}>
                  <p>{y.content}</p>
                </div>
                <div className={styles.ppleftsign}>
                  <div className={styles.ppsignimg}>
                  <Image src={y.logo} width="80" height="45" alt="src"/>
                  </div>
                  <div className={styles.ppsignimg}>
                  <Image src="/Line 1.png" width="1" height="45" alt="src"/>
                  </div>
                  <div className={styles.ppsignname}>
                    <span>{y.imgname}</span><br/>
                    <span>{y.desc}</span>
                  </div>
                </div>
              </div>
              <div className={styles.ppright}>
              <div className={styles.pimage}>
                <Image src={y.img} width="289" height="351" alt="src"/>
              </div>
              </div>
      </div>
          )
        })}
      </div>
      
      <div className={styles.arrows}>
        <div className={styles.rect}></div>
          <div className={styles.left} onClick={()=>handleArrow("L")}>&larr;</div>
          <div className={styles.right} onClick={()=>handleArrow("R")}>&rarr;</div>
      </div>
    </div>
  )
}

export default Profiles
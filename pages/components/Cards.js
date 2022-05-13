import styles from '../../styles/Cards.module.css'
import Image from 'next/image';


function Cards() {

const content = [
    {
      img: "/Group 1006-3.png" ,h1: "Never update your contacts manually", p: "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities"
    },
    {
      img: "/Group 1006-4.png" ,h1: "Engage instantly with prospects who show intent", p: "Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat."
    },
    {
      img: "/Group 1006-5.png" ,h1: "Outreach without leaving your CRM ", p: "Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach."
    },
  ]

  return (
    <div>
      <div className={styles.bg}></div>
      <div className={styles.crm}>
        CRM Acceleration
      </div>
      <div className={styles.cardp}>
      Everything CRM Integrations was supposed to be. And more.
      </div>
      <div className={styles.list}>
      {content.map((x)=>{
            return(
              <div key={x.img}>
                <div className={styles.card1}>
                  <div className={styles.logo1} >
                    <Image src={x.img} alt="Group 1006" width="60" height="60"></Image>
                  </div>
                  <div className={styles.cardh1}>{x.h1}</div>
                  <div className={styles.cardpt1}>{x.p}</div>
              </div>
            </div>
            )
          })}
      </div>     
    </div>
  )
}

export default Cards
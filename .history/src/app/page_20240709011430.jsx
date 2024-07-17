import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css"
import Featured from "@/components/featured/Featured";
import Categorylist from "@/components/Categorylist/Categorylist";
import Cardlist from "@/components/Cardlist/Cardlist";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return( <div className={styles.container}>
   <Featured/>
   <Categorylist/>

   <div className={styles.container}>
    <Cardlist/>
    <Menu/>
   </div>
  </div>);
}

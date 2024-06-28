import { FaApple } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";


function Content() {
  return (
    <div className="content">
      <div className="text">
        <div className="stars">★★★★★ trusted by 10,000+ creators</div>
        <h1>where creators</h1>
        <h1>earn on their</h1>
        <h1>own terms</h1>
        <p>by collaborating with the world's best brands</p>
        <button className="start-earning">
          Start Earning Now <FaApple /> <BiLogoPlayStore />
        </button>
      </div>
      <div className="box1">
        <div className="ImageBox">
          <div className="ImageContainer1">
            <img src="./barbie.jpg" alt="barbie" />
            <div className="name1">
              <h1>barbie</h1>
              <p>on jiocinema</p>
            </div>
          </div>
          <div className="ImageContainer2">
            <img src="./fighter.jpg" alt="fighter" />
            <div className="name2">
              <h1>fighter</h1>
              <p>on twitter</p>
            </div>
          </div>
        </div>
        <div className="block1"> <p>payout earned</p> <h1 className="tricky-icon">₹25k <BsGraphUpArrow /></h1> 
        </div>
        <div className="block2"> <p>campaign reward</p> <h1>₹20L</h1>
        </div>
      </div>
    </div>
  );
}


export default Content;
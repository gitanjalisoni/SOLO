import React from 'react';

function Content() {
  return (
    <div className="content">
      <div className="text">
        <div className="stars">★★★★★  trusted by 10,000+ creators</div>
        <h1>where creators</h1>
        <h1>earn on their</h1>
        <h1>own terms</h1>
        <p>by collaborating with the world's best brands</p>
        <button className="start-earning">start earning now <img src="apple-fill (1).png" alt="apple-icon" />
      </button>
      </div>
      <div className='box1'>
      <div className='ImageBox'>
        <div className='ImageContainer1'>
          <img src='./barbie.jpg' alt="barbie" />
          <div className="name">barbie on jiocinema</div>
          <div className="platforms">instagram • reels</div>
          <div className="campaign-details">
              <div className="campaign-reward">campaign reward ₹20L</div>
              <div className="campaign-payout">payout earned ₹25k</div>
            </div>
        </div>
        <div className='ImageContainer2'>
          <img src='./fighter.jpg' alt="fighter" />
          <div className="campaign-details">
              <div className="campaign-reward">campaign reward ₹20L</div>
              <div className="campaign-name">fighter on twitter</div>
              <div className="campaign-platforms">x.com • tweet</div>
              <div className="campaign-payout">payout earned ₹25k</div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Content;

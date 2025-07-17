import './Timeline.css';

export function Timeline() {
    return (
        <div className="container">
1년간의 성장일기 title 마다 컬러 입히기 
<div className="timeline">
  <div className="timeline-container left">
    <div className="content">
        <img className='timeline-img' src={"/assets/img/ultrasonic.png"}
            ></img>
      {/* <h2>2024.10.17 처음만난날</h2>
      <p>Lorem ipsum..</p> */}
    </div>
  </div>
  <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={"/assets/img/birth.png"}
            ></img>
    </div>
  </div>
    <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={"/assets/img/50.png"}
            ></img>
    </div>
  </div>
      <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={"/assets/img/100.png"}
            ></img>
    </div>
  </div>

    <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={"/assets/img/200.png"}
            ></img>
    </div>
  </div>
</div>
        
        </div>
    )
}
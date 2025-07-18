import './Timeline.css';

export function Timeline() {
    return (
        <div className="container">
               <h1 className='title'>1년간의 성장일기</h1>
<div className="timeline">
  <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={process.env.PUBLIC_URL+"/assets/img/ultrasonic.png"}
            ></img>
    </div>
  </div>
  <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={process.env.PUBLIC_URL+"/assets/img/birth.png"}
            ></img>
    </div>
  </div>
    <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={process.env.PUBLIC_URL+"/assets/img/50.png"}
            ></img>
    </div>
  </div>
      <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={process.env.PUBLIC_URL+"/assets/img/100.png"}
            ></img>
    </div>
  </div>

    <div className="timeline-container right">
    <div className="content">
        <img className='timeline-img' src={process.env.PUBLIC_URL+"/assets/img/200.png"}
            ></img>
    </div>
  </div>
</div>
        
        </div>
    )
}
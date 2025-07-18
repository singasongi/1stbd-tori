import './Welcome.css';

export function Welcome() {
    return (
        <div className="container">
               <h1 className='title'>1st Birthday Party</h1>
            <img className='studo100' src={process.env.PUBLIC_URL+"/assets/100-studio.jpg"}
            ></img>
            <div className='mt-4'></div>
            <h2> 심은유</h2><h2>첫번째 생일</h2>
                <div className='family'>
                    <div className='names'>아빠 <div className='our'>심규원 &nbsp;</div> 엄마 <div className='our'>김송이</div></div>
        
                </div>
            <h2>2025년 10월 11일 토요일 6PM</h2>
            <h2>포항 티파니 웨딩홀 / 어쩌고 홀</h2>
        
        </div>
    )
}
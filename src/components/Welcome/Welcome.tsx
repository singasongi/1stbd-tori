import './Welcome.css';

export function Welcome() {
    return (
        <div className="container">

            <div className='welcome-names'>
            <h1>1st Birthday Party</h1>
            </div>

            <img className='studo100' src={"/assets/100-studio.jpg"}
            ></img>
            <div className='mt-4'></div>
            <h2> 심은유</h2><h2>첫번째 생일</h2>
            <h2> 아빠 심규원 엄마 김송이</h2><h2>2025년 10월 11일 토요일 6PM</h2>
            <h2>포항 티파니 웨딩홀 / 어쩌고 홀</h2>
        
        </div>
    )
}
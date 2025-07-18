import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
// import { dotenv } from 'dotenv';
import './Contact.css';
// dotenv.config();
declare global {
    interface Window {
        Kakao: any;
    }
}
export function Contact() {

    const sendCustomShare = () => {
        if (window.Kakao) {
            const kakao = window.Kakao

            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_KEY)
            }
            kakao.Link.createCustomButton({
                container: "#kakao-link-btn",
                templateId: 122553,
            });

        }
    }
    return (
        <div className='container'>
            {/* <h2 className='title'>공유하기</h2> */}
            <div className="d-grid gap-2">
                <Button id="kakao-link-btn" className='bank-button' size="lg" onClick={sendCustomShare}>
                    카카오톡으로 청첩장 공유하기
                </Button>
            </div>
            <div className="complimentary_close">
                <div>심은유의 돌잔치 초대장입니다. </div>
                <div>축하연락은 알고계신 연락처로 연락 부탁드리며, </div>
                <div>오류사항이나 기타 문의사항에 대해서는</div>
                <div><a href="mailto:singasongik@gmail.com">singasongik@gmail.com</a>으로 연락주시면 감사하겠습니다!</div>
                <div>방문해주셔서 감사합니다 :)</div>
            </div>
        </div>
    )
}
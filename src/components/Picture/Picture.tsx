import './Picture.css';
import { Carousel } from 'react-bootstrap';

export function Picture() {
    let arr: number[] = new Array(17).fill(0);
    const onErrorImg = (e:any) => {
        e.target.src = `/assets/img/no-image.png`;
    }

    const imgRender = () => {
        let result: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            // let index : number = i+1;
            result.push(
                <Carousel.Item>
                    <div className='pictrue-contianer'>
                    <img
                        className="picture-img d-block w-100"
                        src={`/assets/img/${((i+1)>9?(i+1):`0`+(i+1))}.jpeg`}
                        // src={`https://songi-gyuwon.web.app/assets/img/${((i+1)>9?(i+1):`0`+(i+1))}.jpeg`}
                        onError={onErrorImg}
                    />
                    </div>

                    <Carousel.Caption>
                        {/* <h3>결혼사진</h3>
                        <p>이쁘게봐주세요~!ㅎㅎ</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            );
        }
        return result;
    }

    return (
        <>
            <Carousel fade>
                {imgRender()}
            </Carousel>
        </>

    )
}




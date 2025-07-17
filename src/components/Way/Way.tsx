import  { useState, useRef } from 'react';
import './Way.css';
import { Overlay, Tooltip, Alert } from 'react-bootstrap';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export function Way() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const address = "경북 포항시 남구 대이로 18"
  const copyAddress = (text: string, isShow: boolean) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("클립보드에 복사하지 못했습니다.");
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    if (isShow) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }

  };

  const appMap = [
    {
      name: "네이버지도",
      img: "/assets/map/navermap.png",
      scheme: "nmap://place?lat=36.017378546429484&lng=129.34358588092584&name=UA%EC%BB%A8%EB%B2%A4%EC%85%98"
    }, {
      name: "구글지도",
      img: "/assets/map/googlemap.png",
      scheme: "https://maps.google.com/?q=UA컨벤션&center=36.017378546429484,129.34358588092584&views=transit"
    }, {
      name: "카카오지도",
      img: "/assets/map/kakaomap.png",
      scheme: "kakaomap://look?p=36.017378546429484,129.34358588092584"
    }, {
      name: "티맵",
      img: "/assets/map/tmap.png",
      scheme: "tmap://route?goalname=UA컨벤션&goalx=129.34358588092584&goaly=36.017378546429484"
    },
  ]

  const desktopMap = [
    {
      name: "네이버지도",
      img: "/assets/map/navermap.png",
      scheme: "https://naver.me/GJrFyntP"
    }, {
      name: "구글지도",
      img: "/assets/map/googlemap.png",
      scheme: "https://maps.google.com/?q=UA컨벤션&center=36.017378546429484,129.34358588092584&views=transit"
    }, {
      name: "카카오지도",
      img: "/assets/map/kakaomap.png",
      scheme: "http://kko.to/xJeDEX7pG"
    },
  ]


  const appTaxi = [
    {
      name: "카카오티",
      img: "/assets/map/kakaot.png",
      scheme: "kakaotaxi://"
    }, {
      name: "UT",
      img: "/assets/map/ut.png",
      scheme: "uber://"
    }
  ]
  const appArr = (arr: any, type: string) => {

    let result: any[] = [];
    for (const i of arr) {
      result.push(
        <div>
          <img className="app-button" onClick={() => exeDeepLink(i.scheme, type)}
            src={i.img}
          ></img>
          <div className="app-name"> {i.name}</div>
        </div>
      );
    }
    return result;
  }

  const exeDeepLink = (url: string, type: string) => {
    // url = "yourapp://path/";
    if (type == "taxi")
      copyAddress(address, false)
    window.location.href = url;
  }

  return (
    <div className="container">
      <h1 className='title'>오시는길</h1>
      <h6>{address} </h6>
      <h5> UA컨벤션 / 6층 그랜드볼룸홀</h5>
      <div >

        <img className="map" ref={target} onClick={() => copyAddress(address, true)}
          src={"/assets/map1.jpg"}

        ></img>
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Tooltip id="map-tooltip" {...props} >
              <Alert variant={'dark'}>
                클립보드에 주소가 복사되었습니다.</Alert>
            </Tooltip>
          )}
        </Overlay>
        <Alert className="map-desc" variant={'light'}>
          약도를 클릭하시면 주소가 복사됩니다.
        </Alert>

      </div>
      <div className="map-apps">
        <div className="apps-container">
          <div className="apps-header">
            지도 어플 연결하기
            <div className="apps-header-desc"> 어플에 목적지가 설정되어 실행됩니다.</div>
          </div>
          <BrowserView>
          <div className="apps-buttons">
              {appArr(desktopMap, 'map')}
            </div>
          </BrowserView>
          <MobileView>
            <div className="apps-buttons">
              {appArr(appMap, 'map')}
            </div>
            <div className='mt-3'> 
            **카카오톡 브라우저를 통해 모바일 청첩장을 여신 경우, 앱과 연결이 원활하지 않을 수 있습니다.**
            </div>
          </MobileView>
        </div>
        <MobileView>
        <div className="apps-container">
          <div className="apps-header">
            택시 어플 켜기
            <div className="apps-header-desc"> 클립보드에 주소가 복사됩니다.</div>
          </div>
          <div className="apps-buttons">
            {appArr(appTaxi, 'taxi')}
          </div>
        </div>
      </MobileView>
      </div>


    </div>
  )
}
import { Accordion, Alert, Button } from 'react-bootstrap';
import './Bank.css';

export function Bank() {
    const list1 = [
        {
            name: '심덕보',
            bank: '농협',
            account: '717074-52-242733'
        },
        {
            name: '이향미',
            bank: '농협',
            account: '356-0013-1202-23'
        }, {
            name: '심규원',
            bank: '농협',
            account: '351-0847-6938-13'
        }
    ]
    const list2 = [
        {
            name: '김규원',
            bank: '기업은행',
            account: '280-069176-01-011'
        },
        {
            name: '진경희',
            bank: '대구은행',
            account: '019-13-014005'
        }, {
            name: '김송이',
            bank: '케이뱅크',
            account: '01-010-3377-2176'
        }
    ]
    const listArr = (arr: any[]) => {
        let result: any[] = [];
        for (const element of arr) {
            result.push(
                <Alert className='bank-lists'>
                    <div>
                        <div>{element.name}({element.bank})</div>
                        <div>{element.account} </div>
                    </div>
                    <Button className='bank-button' onClick={() => copyAccount(element.account)} >
                        복사하기
                    </Button>
                </Alert>
            )
        }
        return result;
    }
    const copyAccount = (account: string) => {
        let result: any[] = [];
        if (!document.queryCommandSupported("copy")) {
            return alert("蹂듭궗�븯湲곌�� 吏��썝�릺吏� �븡�뒗 釉뚮씪�슦����엯�땲�떎.");
        }
        const textarea = document.createElement("textarea");
        textarea.value = account;
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.position = "fixed";

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    return (
        <div className='container'>
            <h1 className='title'>마음 전하실 곳</h1>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>신랑 측</Accordion.Header>
                    <Accordion.Body>
                        {
                            listArr(list1)
                        }
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>신부 측</Accordion.Header>
                    <Accordion.Body>
                        {
                            listArr(list2)
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
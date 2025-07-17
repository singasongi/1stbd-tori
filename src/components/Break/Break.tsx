import './Break.css';

interface Breaks {
  type: string;
  path: string;
}
interface Iprops {
  type: number,
}

export function Break(props: Iprops) {
  const greens: Breaks = {
    type: 'break',
    path: 'greens'
  }, reversGreens: Breaks = {
    type: 'break-reverse',
    path: 'greens'
  }, chestnut: Breaks = {
    type: 'leaves',
    path: '2'
  }, arcon: Breaks = {
    type: 'leaves',
    path: '3'
  }, pine: Breaks = {
    type: 'break',
    path: 'pine'
  }, berry: Breaks = {
    type: 'break',
    path: 'berry'
  }, mushroom: Breaks = {
    type: 'leaves',
    path: '8'
  }, green: Breaks = {
    type: 'break',
    path: 'green'
  }, pink: Breaks = {
    type: 'break',
    path: 'pink'
  }, flower: Breaks = {
    type: 'leaves',
    path: '6'
  }, yellow: Breaks = {
    type: 'break',
    path: 'yellow'
  }, yellows: Breaks = {
    type: 'leaves',
    path: '15'
  }, party: Breaks = {
    type: 'leaves',
    path: '11'
  };

  const breakRender = (arr: any[]) => {
    let result: any[] = [];
    for (const i of arr) {
      result.push(
        <img className={(i.type + "-item")}
          src={process.env.PUBLIC_URL + `assets/${i.type == 'break-reverse' ? 'break' : i.type}/${i.path}.svg`}
        />
      );
    }
    return result;
  }

  const typeRender = (type: number) => {
    let result;
    switch (type) {
      case 1:
        result = breakRender([flower, reversGreens, flower, greens, flower])
        break;
      case 2:
        result = breakRender([party, yellow, party, yellow, party])
        break;
      case 3:
        result = breakRender([yellows, green, yellows, green, yellows])
        break;
      case 4:
        result = breakRender([mushroom, pine, mushroom, pine, mushroom])
        break;
      case 5:
          result = breakRender([chestnut, pink, chestnut, pink, chestnut])
          break;
      default:
        result = breakRender([arcon, pink, arcon, pink, arcon])
        break;
    }
    return (
      <div className="breaks">
        {result}
      </div>
    );
  }


  return (

    <>
      {typeRender(props.type)}
    </>

  )
}
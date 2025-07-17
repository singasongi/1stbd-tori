
import './Calendar.css';
import moment from 'moment';
interface Iprops {
  date: string,
}

export function Calendar(props: Iprops) {
  const monthToRender = [];
  const weekToRender = [];
  const dMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const designationDate = moment(props.date, 'YYYY-MM-DD');

  for (let i of dMonth) {
    monthToRender.push(
      <td className={"month " + (designationDate.format('MM') == i + '' ? 'active-month' : '')}>{i}월</td>
    );
  }
  for (let i of dWeek) {
    weekToRender.push(
      <td className="day">{i}</td>
    );
  }
  const firstWeek = designationDate.clone().startOf('month').week();
  const lastWeek = designationDate.clone().endOf('month').week() === 1 ? 53 : designationDate.clone().endOf('month').week();

  const calendarArr = () => {

    let result: any[] = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = designationDate.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              if (days.format('MM') !== designationDate.format('MM')) {
                return (
                  <td key={index} className={"table-date"}></td>
                );
              } else {
                return (
                  <td key={index} className={"table-date "
                    + (designationDate.format('D') == days.format('D') ? 'active-date' : '')
                    + (days.day() == 0 ? 'holiday' : '')
                  }>{days.format('D')}</td>
                );
              }
            })
          }
        </tr>
      );
    }
    return result;
  }

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-outter">
          <div className="calendar-inner">
            <div className="full_date">
              <span >{designationDate.format('YYYY')}년 {designationDate.format('MM')}월{designationDate.format('D')}일 / 6시 PM</span>
            </div>
            <table className="months-table w-100">
              <tbody>
                <tr >
                  {monthToRender}
                </tr>
              </tbody>
            </table>
            <table className="days-table w-100">
              {weekToRender}
            </table>
            <div >
              <table className="dates-table w-100">
                <tbody>
                  {calendarArr()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

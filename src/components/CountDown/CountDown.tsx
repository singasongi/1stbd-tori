import { useEffect, useState } from 'react';
import moment from 'moment';
import './CountDown.css';

interface Iprops {
	date: string
}

export function CountDown(props: Iprops) {
	const designationDate = moment(props.date, 'YYYY-MM-DD HH:mm');
	const [now, setNow] = useState(moment());
	const timeBetween = moment.duration(designationDate.diff(now));
	const item = [
		{
			name: 'month',
			data: timeBetween.months(),
			unit: '개월',
		}, {
			name: 'day',
			data: timeBetween.days(),
			unit: '일',
		}, {
			name: 'hour',
			data: timeBetween.hours(),
			unit: '시간',
		}, {
			name: 'minute',
			data: timeBetween.minutes(),
			unit: '분',
		}, {
			name: 'second',
			data: timeBetween.seconds(),
			unit: '초',
		}]

	const itemArr = () => {
		let result: any[] = [];
		for (let i = 0; i < item.length; i++) {
			if (i == 0 && item[i].data <= 0)
				continue;
			if (i == 4 && item[0].data > 0)
				break;
			result.push(
				<div className="countdown-items">
					<div className="data">{item[i].data}</div>
					<div className="unit">{item[i].unit}</div>
				</div>
			);
		}
		return result;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(moment());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container">
			<div className="title">
				{/* 얼마나 남았을까용??? */}
				<h1>남은 시간</h1>
			</div>
			<div className="countdown-container">
				{itemArr()}
			</div>
		</div>
	)
}
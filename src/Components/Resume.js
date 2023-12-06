import React, { Component } from 'react';
import Slide from 'react-reveal';
import { Card, Image } from 'antd';

class Resume extends Component {
	getRandomColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		if (!this.props.data) return null;

		const skillmessage = this.props.data.skillmessage;
		// const education = this.props.data.education.map(function (education) {
		// 	return (
		// 		<div key={education.school}>
		// 			<h3>{education.school}</h3>
		// 			<p className="info">
		// 				{education.degree} <span>&bull;</span>
		// 				<em className="date">{education.graduated}</em>
		// 			</p>
		// 			<p>{education.description}</p>
		// 		</div>
		// 	);
		// });

		// const work = this.props.data.work.map(function (work) {
		// 	return (
		// 		<div key={work.company}>
		// 			<h3>{work.company}</h3>
		// 			<p className="info">
		// 				{work.title}
		// 				<span>&bull;</span> <em className="date">{work.years}</em>
		// 			</p>
		// 			<p>{work.description}</p>
		//
		// 		</div>
		// 	);
		// });

		const skills = this.props.data.skills.map((skills) => {
			const backgroundColor = this.getRandomColor();
			const className = 'bar-expand ' + skills.name.toLowerCase();
			const width = skills.level;

			return (
				<li key={skills.name}>
					<span style={{ width, backgroundColor }} className={className}></span>
					<em>{skills.name}</em>
				</li>
			);
		});

		return (
			<section id="resume">
				<div className="cards">
					<div className="cards1">
						<Card className="card card-container" title="Медицинская шина">
							<p className="upper-text">
								Шина для надежной фиксации повреждений
							</p>
							<Image
								className="cardImage"
								PreviewType={{ visible: false }}
								src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg"></Image>
							<h4 className="cardText">
								Унифицированная иммобилизационная медицинская шина,
								разработанная «ЗинМед», представляет собой инновационное
								медицинское изделие, способное обеспечить надежную фиксацию и
								защиту поврежденных конечностей. Шина имеет универсальную
								структуру, которая позволяет использовать ее для фиксации
								различных типов повреждений, включая переломы и вывихи.
							</h4>
						</Card>
						<Card className="card card-container" title="Носилки скорой помощи">
							<p className="upper-text">
								Носилки для транспортировки пострадавших
							</p>
							<Image
								className="cardImage"
								PreviewType={{ visible: false }}
								src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg"></Image>
							<h4 className="cardText">
								Носилки, производимые компанией «ЗинТех», представляют собой
								инновационное медицинское устройство, разработанное для
								эффективной и безопасной транспортировки пострадавших. Носилки
								оснащены передовыми функциями, включая регулируемую высоту,
								удобные ремни и подголовник, обеспечивая комфорт и стабильность
								во время транспортировки. Носилки имеют легкую и прочную
								структуру, которая обеспечивает маневренность и удобство
								использования.
							</h4>
						</Card>
					</div>
					<div className="cards2">
						<Card className="card card-container" title="БНП">
							<p className="upper-text">БНП для подогрева пищи</p>
							<Image
								className="cardImage"
								PreviewType={{ visible: false }}
								src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg"></Image>
							<h4 className="cardText">
								БНП - разработанное компанией «ЗинХим», предназначенное для
								безопасного и эффективного подогрева пищи военного, медицинского
								и туристического назначения. БНП не использует открытого огня,
								что делает его безопасным для использования в любых условиях.
								Устройство обладает высокой энергоэффективностью и компактным
								размером, что позволяет легко транспортировать его в походах.
							</h4>
						</Card>
						<Card className="card card-container" title="Тактический рюкзак">
							<p className="upper-text">Рюкзак для военных и авантюристов</p>
							<Image
								className="cardImage"
								PreviewType={{ visible: false }}
								src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg"></Image>
							<h4 className="cardText">
								Тактический рюкзак, разработанный «ЗинТек», является
								инновационным продуктом, предназначенным для военных,
								спортсменов и любителей активного отдыха. Рюкзак обладает
								высокой прочностью, что позволяет надежно защитить содержимое от
								повреждений. Он также оснащен удобными отделениями и системой
								креплений, которые облегчает организацию и переноску всех
								необходимых вещей в любых условиях.
							</h4>
						</Card>
					</div>
				</div>
				<div class="center-container">
					<a href="" target="_blank">
						<div className="bottom-button">Заказать</div>
					</a>
				</div>

				{/* <Slide left duration={1300}>
					<div className="row education">
						<div className="three columns header-col">
							<h1>
								<span>Education</span>
							</h1>
						</div>

						<div className="nine columns main-col">
							<div className="row item">
								<div className="twelve columns">{education}</div>
							</div>
						</div>
					</div>
				</Slide> */}

				{/* <Slide left duration={1300}>
					<div className="row work">
						<div className="three columns header-col">
							<h1>
								<span>Work</span>
							</h1>
						</div>

						<div className="nine columns main-col">{work}</div>
					</div>
				</Slide> */}

				<Slide left duration={1300}>
					<div className="row skill">
						<div className="three columns header-col">
							<h1>
								<span>Преимущества</span>
							</h1>
						</div>

						<div className="nine columns main-col">
							<p>{skillmessage}</p>

							<div className="bars">
								<ul className="skills">{skills}</ul>
							</div>
						</div>
					</div>
				</Slide>
			</section>
		);
	}
}

export default Resume;

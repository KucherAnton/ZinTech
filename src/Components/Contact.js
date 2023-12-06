import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
require('dotenv').config();

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			contactName: '',
			contactEmail: '',
			contactSubject: '',
			contactMessage: '',
		};

		this.onSend = this.onSend.bind(this);
	}

	onSend(e) {
		e.preventDefault();

		// const { contactName, contactEmail, contactSubject, contactMessage } =
		// 	this.state;

		emailjs.sendForm(
			'service_d9j84rj',
			'template_osufmur',
			e.target,
			'-uRNut99FVaIlzjuu'
		);

		setTimeout(() => {
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Сообщение отправлено',
				showConfirmButton: false,
				timer: 1500,
			});
		}, 400);
	}

	render() {
		if (!this.props.data) return null;

		const name = this.props.data.name;
		const street = this.props.data.address.street;
		const city = this.props.data.address.city;
		const state = this.props.data.address.state;
		const zip = this.props.data.address.zip;
		const phone = this.props.data.phone;
		const message = this.props.data.contactmessage;

		return (
			<section id="contact">
				<Fade bottom duration={1000}>
					<div className="row section-head">
						<div className="two columns header-col">
							<h1>
								<span>Get In Touch.</span>
							</h1>
						</div>

						<div className="ten columns">
							<p className="lead">{message}</p>
						</div>
					</div>
				</Fade>

				<div className="row">
					<Slide left duration={1000}>
						<div className="eight columns">
							<form id="contactForm" name="contactForm" onSubmit={this.onSend}>
								<fieldset>
									<div>
										<label htmlFor="contactName">ФИО</label>
										<input
											type="text"
											defaultValue=""
											size="35"
											id="contactName"
											name="contactName"
											onChange={(event) => {
												this.setState({ contactName: event.target.value });
											}}
										/>
									</div>

									<div>
										<label htmlFor="contactEmail">
											Ваша почта <span className="required">*</span>
										</label>
										<input
											type="text"
											defaultValue=""
											size="35"
											id="contactEmail"
											name="contactEmail"
											onChange={(event) => {
												this.setState({ contactEmail: event.target.value });
											}}
										/>
									</div>

									<div>
										<label htmlFor="contactSubject">Тема</label>
										<input
											type="text"
											defaultValue=""
											size="35"
											id="contactSubject"
											name="contactSubject"
											onChange={(event) => {
												this.setState({ contactSubject: event.target.value });
											}}
										/>
									</div>

									<div>
										<label htmlFor="contactMessage">Сообщение</label>
										<textarea
											cols="50"
											rows="15"
											id="contactMessage"
											name="contactMessage"
											onChange={(event) => {
												this.setState({ contactMessage: event.target.value });
											}}></textarea>
									</div>

									<div>
										<button type="submit" id="butt" className="submit">
											Отправить
										</button>
										<span id="image-loader">
											<img alt="" src="images/loader.gif" />
										</span>
									</div>
								</fieldset>
							</form>

							<div id="message-warning"> Error boy</div>
							<div id="message-success">
								<i className="fa fa-check"></i>Your message was sent, thank you!
								<br />
							</div>
						</div>
					</Slide>

					<Slide right duration={1000}>
						<aside className="four columns footer-widgets">
							<div className="widget widget_contact">
								<h4>Контакты</h4>
								<p className="address">
									Зиновьев Вячеслав Романович
									<br />
									{/* <br />
									{street} <br />
									{city}, {state} {zip}
									<br /> */}
									<span>{phone}</span>
									<br />
									slavazinovev3421@gmail.com
								</p>
							</div>

							<div className="widget widget_tweets">
								<h4 className="widget-title">Последние новости</h4>
								<ul id="twitter">
									<li>
										<span>
											This is Photoshop's version of Lorem Ipsum. Proin gravida
											nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
											quis bibendum auctor, nisi elit consequat ipsum
											<a href="./">http://t.co/CGIrdxIlI3</a>
										</span>
										<b>
											<a href="./">2 Days Ago</a>
										</b>
									</li>
									<li>
										<span>
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremque laudantium, totam rem
											aperiam, eaque ipsa quae ab illo inventore veritatis et
											quasi
											<a href="./">http://t.co/CGIrdxIlI3</a>
										</span>
										<b>
											<a href="./">3 Days Ago</a>
										</b>
									</li>
								</ul>
							</div>
						</aside>
					</Slide>
				</div>
			</section>
		);
	}
}

export default Contact;

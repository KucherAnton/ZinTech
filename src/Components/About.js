import React, { Component } from 'react';
import Fade from 'react-reveal';

class About extends Component {
	render() {
		if (!this.props.data) return null;

		const profilepic = 'images/' + this.props.data.image;
		const bio = this.props.data.bio;
		const street = this.props.data.address.street;
		const city = this.props.data.address.city;
		const state = this.props.data.address.state;
		const zip = this.props.data.address.zip;
		const phone = this.props.data.phone;
		const email = this.props.data.email;
		const resumeDownload = this.props.data.resumedownload;

		return (
			<section id="about">
				<Fade duration={1000}>
					<div className="row">
						<div className="three columns">
							<div className="white-circle">
								<img
									className="profile-pic"
									src={profilepic}
									alt="Nordic Giant Profile Pic"
								/>
							</div>
						</div>
						<div className="nine columns main-col">
							<h2>О нас</h2>

							<p>{bio}</p>
							<div className="row">
								<div className="columns contact-details">
									<h2>Контакты</h2>
									<p className="address">
										<span>Зиновьев Вячеслав Романович</span>
										<br />
										{/* <span>
											{street}
											<br />
											{city} {state}, {zip}
										</span>
										<br /> */}
										<span>{phone}</span>
										<br />
										<span>{email}</span>
									</p>
								</div>
								<div className="columns download">
									<p>
										<a href={resumeDownload} className="button" target="_blank">
											<i className="fa fa-vk"></i>Вконтакте
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

export default About;

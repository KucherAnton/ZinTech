import React, { Component } from 'react';
import Fade from 'react-reveal';
import { ReactComponent as TelegramIcon } from '../svg/telegram.svg';

class Footer extends Component {
	render() {
		if (!this.props.data) return null;

		const networks = this.props.data.social.map(function (network) {
			return (
				<li key={network.name}>
					<a href={network.url} target="_blank">
						<i className={network.className}></i>
					</a>
				</li>
			);
		});

		return (
			<footer>
				<div className="row">
					<Fade bottom>
						<div className="twelve columns">
							<ul className="social-links">
								{networks}
								<a href="https://t.me/zincorp" target="_blank">
									<TelegramIcon className="fa fa-telegram"></TelegramIcon>
								</a>
							</ul>

							<ul className="copyright">
								<li>&copy; Copyright 2023 ZinTech</li>
								<li>
									Design by{' '}
									<a href="https://vk.com/anton_kucher" target="_blank">
										Kucher Anton
									</a>
								</li>
							</ul>
						</div>
					</Fade>

					<div id="go-top">
						<a className="smoothscroll" title="Back to Top" href="#home">
							<i className="icon-up-open"></i>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;

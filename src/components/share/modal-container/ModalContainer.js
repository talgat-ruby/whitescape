import React, { Component } from 'react';
import $class from 'classnames';
import './ModalContainer.css';

import { Close } from '../';

class ModalContainer extends Component {
	state = {
		isOpen: this.props.isOpen
	}

	docEvents = ['click', 'keydown']
	body = null

	componentDidMount = () => {
		this.docEvents.map(event => document.addEventListener(event, this.closeHandler, true));
		this.body = document.querySelector('body');
		if(this.state.isOpen) {
			this.prohibitBodyScroll();
		}
	}

	componentWillReceiveProps = ({ isOpen }) => {
		if(isOpen) {
			this.setState(() => ({ isOpen }));
		}
	}

	componentDidUpdate = () => {
		if(this.state.isOpen) {
			this.prohibitBodyScroll();
		} else {
			this.allowBodyScroll();
		}
	}

	componentWillUnmount = () => {
		this.docEvents.map(event => document.removeEventListener(event, this.closeHandler, true));
		if(!this.state.isOpen) {
			this.allowBodyScroll();
		}
		// ref тоже обнуляет, думаю будет правильно
		this.body = null;
	}

	closeHandler = ({ target, which }) => {
		// 1 - mouse, 27 - ESC
		const bool = this.props.isOpen && this.modal && !this.modal.contains(target) && (which === 1 || which === 27);
		if(bool) {
			this.props.close();
		}
	}

	prohibitBodyScroll = () => this.body.classList.add('no-scroll')

	allowBodyScroll = () => this.body.classList.remove('no-scroll')

	transitionHandler = () => {
		if(!this.props.isOpen) {
			this.setState(() => ({ isOpen: false }));
		}
	}

	render = () => (
		<section className={$class('modal-container', { open: this.state.isOpen })}>
			<div
				ref={ref => (this.modal = ref)}
				className={$class('modal', { open: this.props.isOpen })}
				onTransitionEnd={this.transitionHandler}
			>
				<Close onClick={this.props.close}/>
				{this.state.isOpen && this.props.children}
			</div>
		</section>
	)
}

export default ModalContainer;

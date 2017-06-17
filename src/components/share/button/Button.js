import React from 'react';
import $class from 'classnames';
import './Button.css';

const Button = ({ onClick, name, color }) => (
	<button
		className={$class('button', color)}
		onClick={onClick}
	>
		{name}
	</button>
);

export default Button;

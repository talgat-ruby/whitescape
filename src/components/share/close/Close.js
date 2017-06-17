import React from 'react';
import './Close.css';

const Close = ({ onClick }) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.414 191.414"
			xmlnsXlink="http://www.w3.org/1999/xlink" className="close" onClick={onClick}
		>
			<g>
				<path d="M107.888,96.142l80.916-80.916c3.48-3.48,3.48-8.701,0-12.181s-8.701-3.48-12.181,0L95.707,
				83.961L14.791,3.045c-3.48-3.48-8.701-3.48-12.181,0s-3.48,8.701,0,12.181l80.915,80.916L2.61,
				177.057c-3.48,3.48-3.48,8.701,0,12.181c1.74,1.74,5.22,1.74,6.96,1.74s5.22,0,
				5.22-1.74l80.916-80.916l80.916,80.916c1.74,1.74,5.22,1.74,6.96,1.74c1.74,0,5.22,0,5.22-1.74c3.48-3.48,
				3.48-8.701,0-12.181L107.888,96.142z"
				/>
			</g>
		</svg>
	);
};

export default Close;

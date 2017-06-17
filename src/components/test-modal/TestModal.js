import React, { Component } from 'react';
import './TestModal.css';

import { Button } from '../share/';

class TestModal extends Component {
	state = {
		name: ''
	}

	changeHandler = ({ target: { value, name } }) => {
		this.setState(() => ({
			[name]: value
		}));
	}

	render = () => (
		<div className="test-modal">
			<header>
				<span className="header-text">What is your name?</span>
			</header>
			<main>
				<input
					className="name"
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.changeHandler}
					placeholder="i.e. Bender"
				/>
				<p className="sample-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eget ligula vitae vehicula. Cras molestie magna ac sapien gravida rhoncus. Fusce ac nisl justo. Donec ut magna bibendum, vestibulum purus sed, ultrices ante. In vestibulum consequat porttitor. Vivamus arcu arcu, scelerisque eget libero et, ultrices tincidunt ante. Vivamus luctus, ante quis gravida scelerisque, massa nulla convallis eros, at bibendum justo diam sed dolor. Sed pellentesque sollicitudin tellus in pulvinar. Pellentesque egestas posuere ante. Donec aliquet iaculis placerat. Aenean egestas suscipit nisl, vel ornare eros varius at. Proin dolor nibh, consequat quis erat ac, pellentesque sodales enim. Nulla at tincidunt purus, sit amet sagittis orci. Quisque non quam luctus, vestibulum metus eu, dictum justo.

Donec nec pharetra augue. Vivamus vitae fermentum ante. Mauris porta at turpis non varius. Cras ultrices turpis arcu, id condimentum elit elementum nec. Suspendisse elementum venenatis sem, a fermentum ipsum. Integer congue odio sed arcu tempor, a tristique massa feugiat. Duis orci nisl, vulputate sit amet tempor fermentum, ornare egestas urna.

Nullam nibh nulla, convallis at metus at, placerat placerat mauris. Sed ac felis nec justo pretium hendrerit a non nunc. Aenean lorem massa, semper ac urna ut, egestas iaculis justo. Cras tempor tincidunt justo vel venenatis. Sed interdum mi dolor, non consectetur neque pellentesque sed. Mauris at nunc vel turpis accumsan convallis. Nulla quis tristique magna. Quisque fringilla eros quis congue rutrum. Nam euismod turpis quis arcu vestibulum, vel mollis tellus ornare. In fermentum mollis finibus. Cras quis augue lorem.

Morbi sit amet gravida sem. Nulla vestibulum pulvinar risus eu dapibus. Duis id tempus felis, eget facilisis tortor. Nunc turpis augue, finibus dignissim odio in, fringilla mattis est. Sed nec justo lacinia, suscipit metus in, imperdiet dolor. Donec ut elit semper, sodales justo nec, aliquet nisi. Integer mollis elit a lacus scelerisque mollis. Morbi porta dictum odio, eget gravida diam tincidunt facilisis. Curabitur sodales velit odio, nec tincidunt est auctor eget. Nam ante lectus, auctor vel tortor sed, sollicitudin semper turpis. Sed lacinia rutrum augue, at luctus tellus pretium at. Curabitur ac enim vel erat ullamcorper volutpat. Sed in rutrum sem, vitae congue mauris. Aliquam venenatis mauris a augue aliquam blandit. Aliquam erat volutpat.

Praesent accumsan congue risus, eget blandit ex finibus nec. Nam sit amet rutrum elit. In hac habitasse platea dictumst. Quisque ultricies, nulla nec rhoncus tincidunt, ligula dolor cursus arcu, id porttitor dolor orci sit amet enim. Fusce rutrum mi neque, in laoreet est luctus eu. Nulla rhoncus ullamcorper massa et fermentum. Aenean lobortis erat at lorem hendrerit, vel iaculis augue volutpat. Fusce et venenatis metus. Nulla porttitor ligula ut ligula semper, et cursus est semper. In mattis lectus id vestibulum iaculis.

Fusce eget arcu semper, porttitor magna quis, vulputate elit. Morbi tristique dolor a lacinia tincidunt. Mauris sollicitudin elit efficitur lorem porttitor pellentesque. Fusce quis varius dolor. Pellentesque suscipit pharetra lectus non lacinia. Aliquam felis nisl, scelerisque in lacus vitae, bibendum tristique ligula. Donec nec lectus sed lorem gravida facilisis. In tincidunt elit vitae libero vehicula posuere. Praesent iaculis volutpat est. Aenean eu dui mollis justo posuere condimentum vel non elit. Morbi elementum justo sit amet ante blandit aliquet. Etiam semper finibus commodo. Morbi convallis venenatis diam, et dignissim diam lacinia sit amet. Nunc consectetur elit et pellentesque consectetur. Donec efficitur blandit nisl sit amet dictum. Vivamus blandit dui metus, ornare lobortis ligula commodo at.

Integer vulputate nunc nec magna pellentesque, eget sollicitudin eros scelerisque. Morbi elit est, convallis ut pellentesque nec, pellentesque a mi. Praesent accumsan, diam id convallis commodo, dui erat dignissim urna, sit amet eleifend ligula libero ac ligula. Suspendisse metus turpis, pharetra sed aliquet at, consequat vel quam. Cras congue justo velit, quis interdum sem blandit commodo. In sit amet iaculis augue. Donec feugiat eros ipsum, eget convallis sapien dictum sed. Ut accumsan massa vel nulla eleifend varius. Aliquam hendrerit metus sit amet ante hendrerit tempus. In eleifend dictum ornare. Praesent facilisis quis nisi tincidunt pretium. Suspendisse ac sodales ex. Donec pharetra sit amet metus vitae volutpat. Donec quis dui dolor.

Donec viverra tortor non lacus convallis, quis finibus ex tempor. Ut orci metus, condimentum nec libero non, fringilla elementum odio. Aliquam pharetra diam eget ullamcorper vehicula. Donec odio justo, bibendum cursus enim eu, aliquet congue odio. Nam tristique, lorem in lacinia malesuada, orci orci maximus sem, a euismod ante lorem in felis. Aenean vitae sollicitudin nibh, non posuere sapien. Sed metus nulla, convallis consectetur mi nec, laoreet molestie magna.

In iaculis ligula venenatis, venenatis erat ut, accumsan arcu. Donec enim eros, sodales sit amet lacus eu, molestie efficitur velit. Quisque eget risus lorem. Suspendisse id elit nibh. Sed at sodales quam, eu feugiat lacus. Suspendisse fermentum dui et tortor cursus, eget lacinia libero egestas. Vestibulum vel eros dapibus, luctus dolor vitae, lobortis libero. Aliquam condimentum lorem dapibus leo malesuada cursus.

Praesent feugiat laoreet tincidunt. Integer eget rutrum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut et sagittis urna, sit amet faucibus quam. Proin sodales mi eu dapibus aliquam. Nullam vulputate, risus vel eleifend maximus, tortor sapien eleifend metus, quis pharetra mauris dolor a odio. Nam feugiat pellentesque metus vel pulvinar. Integer dapibus urna quis lorem tincidunt, ac consectetur felis facilisis. Nulla quis diam eget erat pharetra porta. Mauris sed orci nulla. Phasellus commodo, libero non laoreet accumsan, metus tellus convallis eros, ac accumsan erat lacus sed nisl. Nam tincidunt purus ac tellus mollis, vel blandit libero aliquam. Suspendisse porttitor egestas mi, non porta turpis dapibus non. Vestibulum rhoncus felis id egestas eleifend. Aliquam tincidunt efficitur turpis. Nullam tincidunt nisl massa, ac pulvinar augue porta in.

Morbi lacinia risus quis ligula tempor elementum. Morbi ut scelerisque elit, nec rutrum turpis. Aliquam consequat eget ligula quis luctus. Phasellus egestas, ex non porttitor lobortis, sapien dolor scelerisque purus, at pulvinar purus nulla id risus. Proin arcu diam, aliquet nec aliquet vehicula, pulvinar et ex. Nunc dui tellus, viverra ut ultricies vitae, pharetra in sem. Maecenas eu orci leo. Nam ut vulputate massa. Praesent vehicula iaculis massa, vel maximus ligula imperdiet sed. Nam.
				</p>
			</main>
			<footer>
				<Button name="Submit" onClick={this.props.onClose}/>
			</footer>
		</div>
	)
}

export default TestModal;

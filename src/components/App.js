import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ModalContainer, Button } from './share/';
import TestModal from './test-modal/TestModal';

class App extends Component {
	state = {
		modalIsOpen: false
	}

	openModal = () => this.setState(() => ({ modalIsOpen: true }))

	closeModal = () => this.setState(() => ({ modalIsOpen: false }))

	render = () => (
		<div className="app">
			<div className="app-header">
				<img src={logo} className="app-logo" alt="logo"/>
				<h2>Welcome to React</h2>
			</div>
			<div className="app-intro">
				<Button
					onClick={this.openModal}
					name="Open modal"
					color="green"
				>
					Open Modal
				</Button>
				<ModalContainer
					isOpen={this.state.modalIsOpen}
					close={this.closeModal}
				>
					<TestModal onClose={this.closeModal}/>
				</ModalContainer>
			</div>
			<p className="sample-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at eleifend enim, in consectetur lorem. Maecenas fringilla tempus tellus, ac commodo massa congue nec. Aliquam rhoncus nunc nibh, ut molestie turpis eleifend vel. Suspendisse potenti. Phasellus efficitur lectus eu nulla sodales, non cursus enim euismod. Donec ac mattis quam. Ut egestas nibh orci, quis tempor erat suscipit at. Phasellus sodales arcu in nulla lacinia pharetra. Aliquam erat volutpat. Sed at feugiat magna. Vivamus leo magna, sollicitudin vitae ligula non, porta maximus ligula. Pellentesque quis pellentesque ligula, volutpat vehicula nisl. Sed sed diam viverra, pellentesque augue at, sollicitudin dolor. Suspendisse et sem et justo posuere posuere ut ac metus. Morbi quis viverra orci. Vestibulum blandit turpis id eros dignissim vehicula.

Phasellus ultricies leo eros, eu pretium turpis bibendum in. Sed ac sem quis enim ullamcorper finibus eu ac orci. Maecenas varius mi diam, a vulputate ligula aliquam quis. Sed lectus libero, malesuada quis gravida cursus, varius sit amet tortor. Morbi viverra vel enim ut venenatis. Fusce vitae nisl felis. Morbi condimentum hendrerit magna, sit amet iaculis ex tempus in. Integer varius diam felis, eget pretium ante ornare ut. Nulla facilisi. Morbi dictum nunc vitae risus tempus, ac finibus risus suscipit. Nam efficitur nisi ut velit efficitur faucibus. Vivamus varius ante ut ipsum rutrum ultrices. Vestibulum dui ante, imperdiet eget arcu sed, rhoncus tempus risus. Praesent lobortis metus nisl, et commodo metus bibendum quis. Curabitur sit amet rhoncus felis. Etiam commodo ipsum non ipsum pulvinar porttitor.

Sed porttitor lobortis congue. Praesent fermentum, lacus eget malesuada elementum, mauris ipsum molestie arcu, quis lacinia felis dui at justo. Suspendisse rhoncus ante sed purus iaculis, eu aliquam eros lacinia. Morbi sollicitudin sit amet quam ac aliquam. Nunc accumsan ligula nec justo iaculis, sit amet sodales felis maximus. Vivamus consectetur ligula et nisi egestas congue. Fusce non arcu ac nisl aliquam ultricies. Nam iaculis nisi sit amet vulputate laoreet.

Donec venenatis, purus at hendrerit sagittis, odio ex malesuada sapien, ac pretium sem metus eget sem. Vestibulum nec nunc urna. Maecenas nec orci ultricies, suscipit turpis eu, ornare metus. Pellentesque eget facilisis nisl. Duis sit amet vehicula elit. Mauris et lacinia risus. Donec consequat tortor et ante varius, eget elementum quam porttitor. Cras ornare condimentum neque, mollis ullamcorper tortor sollicitudin sed. Vestibulum velit leo, mattis sit amet egestas id, laoreet id dui. Donec metus tellus, rhoncus sit amet eleifend sit amet, sollicitudin non eros. Quisque id luctus turpis, a varius neque.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tellus dolor, dapibus sed sodales pretium, venenatis sit amet dolor. Integer nec augue condimentum, porttitor enim sed, dapibus libero. Pellentesque laoreet venenatis quam id lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In et odio sapien. Donec et dui nec mauris egestas porta. Ut blandit metus nibh, nec egestas lacus faucibus non. Sed tempus nisi ut nunc sollicitudin, vel cursus sem consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisi aliquet urna rutrum, at auctor elit elementum.

Integer facilisis, lorem id vehicula mollis, diam arcu congue libero, id convallis leo nisl rhoncus lorem. Pellentesque malesuada eget erat id auctor. Quisque felis lacus, suscipit eget augue sit amet, pulvinar elementum erat. Sed lectus nibh, consectetur quis auctor vel, tempus quis metus. Nullam blandit, nisl ac fringilla sodales, nisl erat efficitur urna, vel egestas orci lectus blandit sem. Pellentesque eu est euismod, volutpat erat at, porttitor felis. Suspendisse sodales nibh elit, et venenatis purus tincidunt laoreet. Aliquam cursus lectus ut sapien tristique, nec scelerisque neque dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a odio sed tellus aliquet accumsan. Nam nec nulla vel leo ornare luctus. Quisque lectus purus, convallis ut est iaculis, vulputate accumsan ligula. Mauris semper dolor massa, in suscipit enim condimentum et. Sed accumsan tincidunt diam. Suspendisse pretium rutrum nibh, at faucibus quam sagittis sit amet. Nunc sodales mi vel suscipit mattis.

Curabitur malesuada dictum magna a euismod. Aenean sed lorem sit amet neque tristique sollicitudin. Donec molestie laoreet ipsum, non pharetra urna. Morbi nunc elit, vestibulum id accumsan at, aliquam et ex. Nullam lobortis vel ipsum eu varius. Aenean in massa eget tortor sodales suscipit. In vehicula neque eget diam suscipit ornare. In a vestibulum eros. Nunc fringilla nunc posuere placerat elementum. Nam sed tortor nulla. Pellentesque vitae lectus ut eros efficitur elementum.

Nam facilisis, ex vel tempor lacinia, ipsum leo sollicitudin metus, non tincidunt magna urna eu massa. Mauris vel fringilla dolor. Quisque pretium quam lectus, et lobortis libero interdum at. Maecenas auctor metus ac magna imperdiet, non ornare nibh euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae diam eget purus faucibus porttitor. Phasellus ullamcorper urna id metus commodo, quis pharetra orci accumsan. Nunc mollis sagittis lacinia. Etiam cursus vel diam quis sodales. Cras finibus porta erat, at porttitor ex mollis elementum. Integer maximus in diam eget mollis. Nunc est ex, semper eu ipsum vitae, ultrices scelerisque orci. Nulla euismod dapibus condimentum. Donec facilisis eleifend libero, sed bibendum elit volutpat non. Ut a nisl id augue sagittis posuere nec sit amet risus.

Vivamus felis enim, euismod ac dolor viverra, tincidunt hendrerit massa. Cras porttitor suscipit ullamcorper. Cras efficitur tincidunt sem, eget suscipit risus ultricies vitae. Maecenas auctor maximus leo, eget rhoncus justo aliquet in. Sed congue est felis, sed elementum nisl ultricies eu. Ut eu iaculis nunc. In nec facilisis turpis. Donec in dui vitae lectus condimentum congue eu ac sapien. Vestibulum suscipit diam auctor nulla porttitor efficitur.

Quisque imperdiet risus nec felis blandit viverra. Donec molestie quis nisl ut scelerisque. Quisque dignissim, orci sed ultricies mollis, velit eros feugiat felis, ut convallis ligula orci eget lectus. Nam imperdiet tortor nulla, ut rutrum elit dapibus ac. Duis consectetur dui non est cursus tempus. Cras nec tincidunt sem. Integer viverra nisi mi, sed imperdiet enim dictum sit amet. Donec euismod vel neque non porta. Sed tempor, nunc vehicula interdum congue, urna diam viverra dolor, quis congue felis dui eget orci. Donec velit lectus, volutpat convallis condimentum in, sodales a ante. Maecenas pretium odio vel urna placerat, lobortis rutrum ipsum laoreet. Curabitur nulla nunc, varius sit amet tempus ut, aliquam vel libero. Sed tempus eget quam ac mollis. Aenean auctor vestibulum euismod. Nunc vulputate libero at nunc porttitor pellentesque.

Maecenas facilisis ligula pellentesque est imperdiet sodales. Phasellus ac fermentum velit, at pulvinar elit. Cras ut ex eget ex egestas maximus at sit amet magna. In semper eros enim, porttitor bibendum quam dignissim quis. Ut vitae ornare nunc. Nulla vitae accumsan nibh, egestas varius orci. Praesent vel blandit diam, ut facilisis urna. Phasellus nec elementum nibh. Nam at justo nulla. Nullam eget felis purus. Mauris suscipit maximus condimentum. Donec pellentesque ultricies tristique. Etiam molestie vel felis quis vestibulum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam blandit rhoncus neque, ac volutpat eros egestas in. Integer arcu nisl, ornare a ex nec, dictum interdum nulla. Vestibulum non sem neque. Nulla sed felis sed est pulvinar varius. Aliquam consequat elit est. Donec faucibus molestie lacus, non rutrum est cursus consectetur. Fusce varius pellentesque magna sed placerat. Suspendisse ullamcorper metus quis elit feugiat, at imperdiet arcu faucibus. Sed lobortis vestibulum elit id rhoncus. Morbi euismod, massa id hendrerit hendrerit, eros enim blandit justo, in efficitur massa nisl ut dolor. Pellentesque vel ipsum eget tortor consequat auctor vel dictum risus.

Quisque maximus sagittis tortor, at luctus urna vulputate at. Donec a volutpat urna. Pellentesque eu nisi vel arcu placerat elementum ac eget odio. Vestibulum ullamcorper augue vitae leo aliquet dignissim. Sed eu erat eu ligula tempor congue. Etiam in sem ante. Phasellus nec arcu sed felis convallis porttitor vitae tempus dui. Etiam in odio felis. Curabitur sit amet tellus et mauris vulputate mattis vel ac odio. Fusce at rhoncus mauris, et semper sem. Nulla non turpis venenatis enim semper mollis sit amet quis nunc. Morbi in feugiat metus. Pellentesque porta aliquet malesuada. Sed est leo, iaculis at rutrum a, commodo sed magna. In erat tellus, pretium ac tristique varius, congue sed purus.

Etiam pretium ante eget nunc semper, quis ullamcorper odio vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi faucibus orci et ante semper, vitae venenatis ligula pretium. Praesent eleifend arcu eu odio fermentum, et iaculis lorem pulvinar. Mauris efficitur massa ac justo blandit vestibulum. Fusce sed dolor ante. Mauris rutrum tempus ornare. Etiam quis orci mauris. Donec finibus maximus suscipit.

Cras eget aliquet odio. Cras elit elit, facilisis id velit in, finibus hendrerit justo. Praesent fermentum eget justo ut mollis. Mauris cursus, diam non tempor pharetra, elit enim pulvinar turpis, nec hendrerit magna sapien ac leo. Cras tincidunt, enim quis lacinia rutrum, turpis nisl ornare nulla, ut vulputate nibh ex quis nibh. Maecenas semper venenatis est ullamcorper faucibus. Fusce quis tincidunt dolor. Etiam nec lacus condimentum, semper risus in, luctus odio. Cras enim dolor, ultricies non enim facilisis, euismod vulputate sapien. Nullam aliquet efficitur sollicitudin. Quisque vel rutrum erat. Aliquam dignissim feugiat est ac molestie.

Donec rutrum venenatis magna. Sed euismod eros non risus aliquam varius. Vivamus maximus, leo non congue venenatis, arcu dui facilisis nibh, at commodo mauris purus et metus. Morbi a arcu in est maximus vehicula vitae nec orci. Donec vitae lacus porta, dignissim velit mollis, imperdiet risus. In scelerisque orci interdum erat imperdiet pellentesque. Suspendisse pulvinar urna quis dui commodo eleifend. Donec facilisis, lectus vitae vulputate porttitor, lectus leo dictum nisl, eu suscipit turpis est vel justo. Nunc consectetur urna nec purus imperdiet ultrices. Curabitur quis ultricies quam. Praesent ultrices mi id laoreet sodales. Vestibulum nec tortor nec dolor tempus aliquam in id est. Pellentesque interdum ullamcorper finibus. Maecenas finibus porta vehicula. Phasellus pellentesque erat ut augue sodales posuere.

Duis massa sem, bibendum id blandit et, fringilla sit amet mi. Sed convallis porta facilisis. Morbi vel metus condimentum, molestie mauris sed, egestas nulla. Duis dapibus nisi velit, sed placerat quam porttitor eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ut elit aliquam mauris faucibus suscipit tempor eu enim. Ut fringilla nec purus eu dictum. Integer nisi urna, dignissim vitae mollis in, facilisis sed felis. Duis eget mi a magna pellentesque ullamcorper eu sit amet eros. Cras sit amet erat sit amet ex vestibulum consequat non sagittis metus. Quisque viverra suscipit finibus. Vestibulum nec massa accumsan, viverra enim id, lobortis massa. Etiam consequat convallis egestas. Quisque vitae justo magna.

Phasellus a varius arcu. Vestibulum lorem risus, ornare eu dictum vitae, tempor vel tortor. Nullam elementum faucibus ultricies. Vestibulum eget augue sem. Fusce ante augue, lacinia eu nunc eu, aliquet efficitur risus. Curabitur a vulputate est, quis commodo dolor. Nulla quis velit hendrerit neque gravida scelerisque ut quis lectus. Maecenas imperdiet eros semper, bibendum risus quis, aliquet dolor. Suspendisse tempus condimentum ligula nec placerat. Mauris condimentum est orci.

Morbi hendrerit lacus et scelerisque sollicitudin. Curabitur ut eleifend nulla, at cursus mi. Vestibulum at elit ipsum. Morbi et pellentesque magna, at tincidunt ex. Nam gravida sem sollicitudin nulla sodales fringilla. Fusce ac quam a augue eleifend tristique. Quisque gravida massa efficitur arcu fermentum fringilla.

Curabitur mi nunc, sollicitudin eu tortor id, eleifend tristique mi. In hac habitasse platea dictumst. Etiam sagittis quam sed laoreet congue. Phasellus vulputate augue vitae justo aliquam aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse consequat feugiat augue quis lobortis. Donec massa metus, maximus pharetra purus vitae, semper sagittis ante. Integer aliquam luctus vestibulum. Aenean dictum bibendum mauris, in pulvinar massa gravida non.

Ut vitae vehicula quam, feugiat tincidunt est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer commodo porta tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin id elit lectus. Cras vitae erat pharetra, ornare nulla at, ultrices ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis scelerisque pellentesque dolor, eget tempus lacus mollis vitae. Ut.
			</p>
		</div>
	)
}

export default App;

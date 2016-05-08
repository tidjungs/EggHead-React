import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0,
			blue: 0,
			green: 0
		}
		this.update = this.update.bind(this)
	}
	update(e){
		// this.setState({txt: e.target.value})
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render(){
		return (
			<div>
				<Slider ref="red"update={this.update} />
				{this.state.red}
				<br />
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br />
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br />
				<hr />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		);
	}
}
class Slider extends React.Component {
	render(){
		return (
			<div>
			<input ref="inp" type="range" 
				min="0"
				max="255"
				onChange={this.props.update} />
			</div>
		)
	}
}
class Widget extends React.Component {
	render() {
		return (
			<div>
				<input type="text" 
					onChange={this.props.update} />
				<h1>{this.props.txt}</h1>
			</div>
		)
	}
}
// const Widget = (props) => {
// 	return (
// 		<div>
// 			<input type="text" 
// 				onChange={props.update} />
// 			<h1>{props.txt}</h1>
// 		</div>
// 	);
// }

export default App
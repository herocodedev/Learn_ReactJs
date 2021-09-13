import React from 'react';
class Cars extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.value,
            brand:"Forxd",
            color:"orange"
        }
    }
    changeColor = () =>{
        this.setState({color:"pink"})
    }
    render(){
        return (
            <div>
                <h2 style={{color:this.state.color}}>{this.state.name}-Thương hiệu: {this.state.brand}-Model: {this.props.bonus.model}</h2>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
export default Cars
import React from 'react';
class Cars extends React.Component{
    render(){
        return <h2 style={{color:this.props.color}}>{this.props.value}-Thương hiệu: {this.props.brand}-Model: {this.props.bonus.model}</h2>
    }
}
export default Cars
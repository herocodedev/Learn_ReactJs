import React from 'react';
class Cars extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }
    delHeader = () => {
        this.setState({show:false})
    }
    render(){
        let header;
        if(this.state.show)
            header = <Child />
        return (
            <div>
                {header}
                <button onClick = {this.delHeader}>Delete Header</button>
            </div>
        )
    }

}

class Child extends React.Component{
    componentWillUnmount(){
        alert("The component named Header is about to be unmounted.");
    }
    render(){
        return (
            <div>
                <h1>Đây là header</h1>
            </div>
        )
    }
}
export default Cars
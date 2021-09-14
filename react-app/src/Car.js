import React from 'react';
class Cars extends React.Component{
    constructor(props){
        super(props)
        this.shoot1 = this.shoot1.bind(this)
        this.state = {
            show:true
        }
    }
    shoot1(){
        console.log('This in shoot 1: ',this) // undefined
        // alert('Helo Mụi người')
    }
    shoot2 = () => {
        console.log('This in shoot 2: ',this) // object
    }

    shoot3 = (a) => {
        console.log('parameter: ',a); // Goal
    }

    shoot4(a){
        console.log('This in shoot 4: ',a) // Goal
        // alert('Helo Mụi người')
    }

    shoot5(a,b){
        console.log('This in shoot 5: ',a)
        console.log('This in shoot 5: ',b)

    }

    shoot6= (a,b) => {
        console.log('This in shoot 6: ',a)
        console.log('This in shoot 6: ',b)

    }
      render() {
        const mystyle = {
            color:"orange",
            fontSize:"4rem",
        }
        return (
            <div>
                <h1 onClick = {this.shoot2} style={mystyle}>Chiếc xe 2</h1>
                {/* <h1 onClick = {this.shoot1} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 1</h1>
                <h1 onClick = {this.shoot2} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 2</h1>
                <h1 onClick = {() => this.shoot3('Goal')} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 3</h1>
                <h1 onClick = {this.shoot4.bind(this,'Goal')} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 4</h1>
                <h1 onClick = {this.shoot5.bind(this,'Goal')} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 5</h1>
                <h1 onClick = {(ev) => this.shoot6('Goal',ev)} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 6</h1> */}
                {/* <h1 onClick = {this.shoot1} style={{color:this.props.color,cursor:"pointer"}}>Chiếc xe 3</h1> */}
            </div>
        );
      }

}


export default Cars
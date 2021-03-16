import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function change(){
	var txt = "Nick";
	document.getElementById("my_field").value = txt;
}

class Ira extends Component {

    constructor ()
    {
        super();
        this.state={firstname:"",
                    lastname:"",
                    email:"",    
        }
    }

    submit()
    {
        console.log(this.state)
        fetch('http://34.69.184.10:8000/api/register',{
           method:'post',
           body:JSON.stringify(
               this.state
           ),
           headers:{
               'Accept':'application/json',
               'Content-Type':'application/json',
           }

        }).then(function(response){
            response.json().then(function(resp){
                console.log(resp)
            })
        })
    }

    componentDidMount() {
        ///alert("Great Shot!");
        fetch('http://34.69.184.10:8000/api/login')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                firstname: result.firstname,
                lastname: result.lastname,
                email: result.email
              });
            },
          )
      }
    

    render () {
        return (
            <div className="form" >
                <div><button style={{color: "red", backgroundColor:"purple", marginLeft:"500px"}} onClick={()=>{this.componentDidMount()}}>Load</button></div>
                <div><label>Firstname:<input id ="my_field" value = {this.state.firstname} type="text" onChange={(item)=>{this.setState({firstname:item.target.value})}} /></label></div>
                <div><label>Lastname:<input type="text" value = {this.state.lastname} onChange={(item)=>{this.setState({lastname:item.target.value})}} /></label></div>
                <div><label>Email:<input value = {this.state.email} style={{color: "red", alignSelf: "center", marginLeft:"25px"}} type="text" onChange={(item)=>{this.setState({email:item.target.value})}}/></label></div>
                <div><button onClick={()=>{this.submit()}}>Save</button></div>
            </div>
        );
    }
}


export default Ira;
ReactDOM.render(
	<Ira />,
	document.getElementById('ira')
);

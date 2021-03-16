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
                    address:"",
                    gender:"",
                    purpose:"",
                    activities:"",    
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
                email: result.email,
                address: result.address
              });
            },
          )
      }
    

    render () {
        return (
            <div className="form" >
                <div><label>Firstname:<input id ="my_field" value = {this.state.firstname} type="text" onChange={(item)=>{this.setState({firstname:item.target.value})}} /></label></div>
                <div><label>Lastname:<input type="text" value = {this.state.lastname} onChange={(item)=>{this.setState({lastname:item.target.value})}} /></label></div>
                <div><label>Email:<input value = {this.state.email} style={{color: "red", alignSelf: "center", marginLeft:"25px"}} type="text" onChange={(item)=>{this.setState({email:item.target.value})}}/></label></div>
                <div><hr></hr></div>
                <div><label>Address:<input  value={this.state.address} onChange={(item)=>{this.setState({address:item.target.value})}} type="text"/></label></div>
                <div><label style={{marginTop:"15px"}}>Gender:</label>
                    <input style={{marginLeft:"10px"}} type="radio" id="male" name="gender" value="male"/>
                    <label style={{marginLeft:"10px"}} for="male">Male</label>
                    <input style={{marginLeft:"10px"}} type="radio" id="female" name="gender" value="female"/>
                    <label style={{marginLeft:"10px"}} for="female">Female</label>
                </div>
                <div><label style={{marginTop:"15px"}}>Purpose</label>
                    <form>
                        <select value={this.state.mycar}>
                            <option value="Select One">Select One</option>
                            <option value="business">business</option>
                            <option value="pleasure">pleasure</option>
                            <option value="both">both</option>
                        </select>
                    </form>
                </div>
                <div><label style={{marginTop:"15px"}}>Activities:</label>
                    <form>
                        <label style={{marginLeft:"10px"}}>
                            football:
                            <input 
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        <label style={{marginLeft:"10px"}}>
                            basketball:
                            <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        <label style={{marginLeft:"10px"}}>
                            tennis:
                            <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        <label style={{marginLeft:"10px"}}>
                            e-sports:
                            <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                     </form>
                </div>
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

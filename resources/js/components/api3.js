import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function change(){
	var txt = "Nick";
	document.getElementById("my_field").value = txt;
}

class Iraklis extends Component {

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
                address: result.address,
                gender: result.gender,
                purpose: result.purpose,

              });
            },
          )
      }

    render () {
        return (
            <div className="form" >
                <div><label>Firstname:<a>{this.state.firstname}</a></label></div>
                <div><label>Lastname:<a>{this.state.lastname}</a></label></div>
                <div><label>Email:<a>{this.state.email}</a></label></div>
                <div><hr></hr></div>
                <div><label>Address:<a>{this.state.email}</a></label></div>
                <div><label style={{marginTop:"15px"}}>Gender:<a>{this.state.gender}</a></label></div>
                <div><label style={{marginTop:"15px"}}>Purpose:<a>{this.state.purpose}</a></label></div>
                <div><label style={{marginTop:"15px"}}>Activities:<a>{this.state.activities}</a></label></div>
                <form action="http://34.69.184.10:8000/">
                    <input type="submit" value="Back To Page 1" />
                </form>
                <form action="http://34.69.184.10:8000/page2/">
                    <input type="submit" value="Back To Page 2" />
                </form>
            </div>
        );
    }
}


export default Iraklis;
ReactDOM.render(
	<Iraklis />,
	document.getElementById('iraklis')
);

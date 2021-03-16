import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
        <input style={{color: "red", backgroundColor:"purple"}} type="button" value="Load"/>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="firstname" id="firstname">
                                <label>Firstname:<input type="text" name="firstname" /></label>
                            </div>
                            <div className="lastname" id="lastname">
                                <label>Lastname:<input type="text" name="lastname" /></label>
                            </div>
                            <div className="email" id="email">
                                <label>Email:<input type="text" name="email" /></label>
                            </div>
                            <input type="button" value="Save" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}


import React, { Component } from "react";
import "./index.css";
import bk1 from '../images/bk1.png'
class Home extends Component {
  render() {
    return (
      <div className="homepage" styles={{ backgroundImage:'url(${bk1})', backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
        <h2>HELLO</h2>
        <p>Cras folutpat, et
        convallis erat elementum. Ut  vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default Home;
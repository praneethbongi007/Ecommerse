import { Component } from "react";
import style from "../styles/header1.module.scss"
import {SearchOutlined,MobileOutlined,DownOutlined } from "@ant-design/icons"
class Header extends Component {

render(){

 return(
<div className={style.container}>

<ul className={style.list}>

<li>About Us|</li>
<li>My Account|</li>
<li>Whislist|</li>
<li>Order Tracking</li>

</ul>
<p className={style.bio}>Get great devices up to 50% off View details</p>
<p className={style.num}><MobileOutlined />Call Us:1800 900</p>
<p>English<DownOutlined/></p>
<p>USD<DownOutlined/></p>

</div>

 )

}



}

export default Header
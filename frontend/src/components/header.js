import { Component } from "react";
import style from "../styles/header.module.scss"
class Header1 extends Component {

render(){

 return(
<div className={style.container}>
<img className={style.logo} src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"/>

<p className={style.btn}>Buy now</p>

</div>

 )

}



}

export default Header1
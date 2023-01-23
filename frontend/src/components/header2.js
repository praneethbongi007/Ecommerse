import { Component } from "react";
import style from "../styles/header2.module.scss"
import { GoGitCompare } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';
import {Link} from "react-router-dom"

import {

    Input,
    Select,
   
} from 'antd';
const { Search } = Input;

class Header2 extends Component {

    render() {
        const onSearch = (value) => console.log(value);

        const { Option } = Select;
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];
        return (
            <div className={style.container}>

                <img src="https://nest-nextjs.vercel.app/assets/imgs/theme/logo.svg" />

                <div >
                    <Input.Group compact style={{ width: "900px" }}>
                        <Select style={{ width: "150px" }} defaultValue="Zhejiang">
                            <Option value="All Categories">All Categories</Option>
                            <Option value="Jiangsu">Womens</Option>
                            <Option value="Zhejiang">Mens</Option>
                            <Option value="Jiangsu">Cellphones</Option>
                            <Option value="Zhejiang">Computers</Option>
                            <Option value="Jiangsu">Electronics</Option>
                            <Option value="Zhejiang">Accessories</Option>
                            <Option value="Jiangsu">Home Garden</Option>
                            <Option value="Jiangsu">Luggages</Option>
                            <Option value="Zhejiang">All Categories</Option>
                            <Option value="Jiangsu">Kids</Option>
                        </Select>
                        <Search
                            style={{
                                width: '50%',
                            }}
                            placeholder="input search text"
                        />
                       
                            

                    </Input.Group>


                </div>


                <p className={style.list}><GoGitCompare />Compare</p>
                <p className={style.list}><AiOutlineHeart />Wishlist</p>
                {/* <p className={style.list} ><BsCart3 />Cart</p> */}
                   <p><Link className={style.list} to="/cart"><BsCart3 />Cart</Link></p>
 
                <p className={style.list}><RxPerson />Account</p>




                <div className="kk"></div>

            </div>

        )

    }



}

export default Header2
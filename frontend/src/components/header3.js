import { Component } from "react";
import style from "../styles/header3.module.scss"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

import { AiOutlineFire } from 'react-icons/ai';

class Header3 extends Component {

    render() {
        const onClick = ({ key }) => {
            message.info(`Click on item ${key}`);
        };
        const items = [
            {
                label: 'Milk and Dairies',
                key: '1',
            },
            {
                label: 'Clothing',
                key: '2',
            },
            {
                label: 'Pet Food',
                key: '3',
            },
            {
                label: 'Clothing',
                key: '4',
            },
            {
                label: 'Pet Food',
                key: '5',
            },
            {
                label: 'Baking Materiail',
                key: '6',
            },
            {
                label: 'Fresh Fruit',
                key: '7',
            },
        ];
        return (
            <div className={style.container}>
                <Dropdown
                    menu={{
                        items,
                        onClick,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{backgroundColor:"#3bb77e",width:"180px",height:"30px",borderRadius:"4px",marginTop:"0.3px"}}>
                            Browse All Categories
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <p><AiOutlineFire/>Hot Deals</p>
                <select>
                    <option>Home</option>
                    <option>Home2</option>
                    <option>Home3</option>
                    <option>Home4</option>
                    <option>Home5</option>

                </select>
                <p style={{color:"green"}}>About</p>

                <select>
                    <option>Shop</option>
                    <option>Home2</option>
                    <option>Home3</option>
                    <option>Home4</option>
                    <option>Home5</option>

                </select>

                <select>
                    <option>Venders</option>
                    <option>Home2</option>
                    <option>Home3</option>
                    <option>Home4</option>
                    <option>Home5</option>

                </select>
                <select>
                    <option>Mega Menu</option>
                    <option>Home2</option>
                    <option>Home3</option>
                    <option>Home4</option>
                    <option>Home5</option>

                </select>
                <select>
                    <option>Blog</option>
                    <option>Home2</option>
                    <option>Home3</option>
                    <option>Home4</option>
                    <option>Home5</option>

                </select>
                <select>
                    <option>Pages</option>
                    <option>Home2</option>
                    <option>Home3</option>
                    <option>Home4</option>
                    <option>Home5</option>

                </select>
                <p>Contact</p>

            </div>

        )

    }



}

export default Header3
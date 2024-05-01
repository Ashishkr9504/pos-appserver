import React,{useState,useEffect} from "react";
import DefaultLayout from '../components/DefaultLayout'
import axios from "axios";
import { Col, Row } from 'antd';
import { useDispatch } from "react-redux";
import ItemList from "../components/ItemList ";
const Homepage = () => {
  const [itemsData,setItemsData]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState('drinks')
  const categories =[
    {
      name:'drinks',
      imageUrl:"https://www.pngmart.com/files/3/Drink-PNG-Photos.png"
    },
    {
      name:'rice',
      imageUrl :"https://th.bing.com/th/id/OIP.CNZpgwGxmnVKcEv3PYmz9QHaFI?rs=1&pid=ImgDetMain"
    },
    {
      name:'noodles',
      imageUrl :"https://media.istockphoto.com/id/656082906/vector/hot-yellow-and-white-noodle-soup-in-chinese-bowl-and-chopstick.jpg?s=612x612&w=0&k=20&c=xLA3Ia6nnyXO6uhxqj0LM1TKJb9gC5oa8ixgmz8u6Ls="
    },
  ]
  const dispatch=useDispatch()
  useEffect(() => {
    const getAllItems = async () => {
      try {
        dispatch({
          type:'SHOW_LOADING'
        })
        const { data } = await axios.get('http://localhost:8080/api/items/get-item');
        setItemsData(data);
        dispatch({
          type:'HIDE_LOADING'
        });
        console.log(data);
      } catch (error) {
        console.log(error);
        console.log("kch glti ho gya");
      }
    };
    getAllItems();
  }, [dispatch]);
  return (
   <DefaultLayout>
   <div className="d-flex">
      {categories.map((category)=>(
        <div key={category.name} className={`d-flex category ${
          selectedCategory ===category.name&&"category-active"
        }`} onClick={()=> setSelectedCategory(category.name)}>
        <h4>{category.name}</h4>
        <img
          src={category.imageUrl}
          alt={category.name}
          height="40"
          width="60"/>

        </div>
      ))}

   </div>
    <Row>
          {
            itemsData.filter(i=> i.category===selectedCategory).map((item) => (
              <Col xs={24} lg={6} md={12} sm={6}>
                <ItemList item={item} />
              </Col>
            ))
            
          }
      </Row>
   </DefaultLayout>
  )
}
export default Homepage


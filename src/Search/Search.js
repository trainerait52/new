import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./Style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'
import { color } from '@mui/system'

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);

    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    const shoplogo = "https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-symbol-19.png"


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <div className='full'>
            <div>
                <img src={shoplogo} style={{ width: "100px", position: "relative", left: "2%", cursor: "pointer",marginLeft:"680px",height:"60px" }} alt="" />
               
            </div>


            <Form >
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text" style={{marginLeft:"700px"}}
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Coffee" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "gray",marginLeft:"750px",marginTop:"15px",position:"relative",borderRadius:"10%",borderColor:"bisque" }}>search</button>
            </Form>


            <section className='iteam_section mt-4 container'>
                <div className='collection-banner'>
                <h2 className='px-4' style={{ fontWeight: 100,marginLeft:"500px", color:"white",marginRight:"600px"}}><b>NEW ARRIVALS!</b></h2>
                </div>

                <div className="container d-flex justify-content-between align-items-center" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"stretch"}}>
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
            
        </div>
    )
}

export default Search

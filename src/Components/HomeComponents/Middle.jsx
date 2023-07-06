import { Heading, Text } from "@chakra-ui/react";
import img1 from "./Chair1.JPG";
import img2 from "./Chair2.JPG";
import clock from "./Clock.JPG";
import FeaturedProducts from "./FeatureProducts";
import Services from "./Services";
import docs from "./docs.JPG";
import map from "./map.JPG";
export default function Middle(){
    return (
        <><div style={{width:"80%",margin:"auto",marginBottom:"20px"}}>
            <Heading>What's New?</Heading><br></br>
            <Text color="#c4c4c4">This season latest news and interior inspiration</Text><br></br>
            <div style={{display:"flex", gap:"30px"}}>
            <div>
            <Text color="#c4c4c4" marginLeft={100} >new collection</Text>
            <img src={img1}/>
            </div>
            <div>
            <Text color="#c4c4c4" marginLeft={100} >Top Sale</Text>
            <img src={img2}/>
            </div>
            </div>
            </div>

            <FeaturedProducts />
            <Services />

            <div style={{display:"flex",width:"90%",justifyContent:"space-around",padding:"80px",margin:"auto",}}>
                <div style={{display:"flex",border:"1px solid #c4c4c4"}}>
                    <img src={clock} width={100} style={{borderRadius:"50px"}}></img>
                    <div style={{padding:"10px 30px"}}>
                    <h1 style={{color:"#404040"}}>Working every day</h1>
                    <h1>24/7</h1><br></br>
                    <Text color="#C4C4C4">from 8:00 till 21:00</Text>
                    </div>
                </div>



                <div style={{display:"flex",border:"1px solid #c4c4c4"}}>
                    <img src={map} width={100} style={{borderRadius:"50px"}}></img>
                    <div style={{padding:"10px 30px"}}>
                    <h1 style={{color:"#404040"}}>Free Delivery</h1>
                    <h1>Worldwide</h1><br></br>
                    <Text color="#C4C4C4">from 2.500</Text>
                    </div>
                </div>


                <div style={{display:"flex",border:"1px solid #c4c4c4"}}>
                    <img src={docs} width={100} style={{borderRadius:"50px"}}></img>
                    <div style={{padding:"10px 30px"}}>
                    <h1 style={{color:"#404040"}}>Support</h1>
                    <h1>Documentation</h1><br></br>
                    <Text color="#C4C4C4">all collection</Text>
                    </div>
                </div>

            </div>
            
            
            </>
    )
        
}
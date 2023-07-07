import Carousel from "./HomeComponents/Corousol";
import HomeAboveComponent from "./HomeComponents/HomeAboveComponent";
import Headers from "./HomeComponents/HomeMiddleComponent";
import Middle from "./HomeComponents/Middle";

const Homepage=()=>{
return (
<>
<HomeAboveComponent />
<Carousel/>
<Headers />
<Middle />
</>
);
}
export { Homepage };

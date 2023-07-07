import { Select, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Filter=({setSortBy,setOrderBy,setLimit})=>{
    const length=useSelector((state)=>state.furniture.length)
    return (
     <div style={{display:"flex",justifyContent:"space-around"}}>
        <h1>{length} Products Found</h1>
        <Stack spacing={5} mb={5}>
        <Select variant='flushed' placeholder='Limit' onChange={(e)=>{setLimit(e.target.value)}} >
            <option value="3">Fetch 3</option>
            <option value="6">Fetch 6</option>
            <option value="9">Fetch 9</option>
        </Select>
</Stack>
        <Stack spacing={5} mb={5}>
        <Select variant='flushed' placeholder='Sort By' onChange={(e)=>{setSortBy("price"); setOrderBy(e.target.value)}} >
            <option value="asc">Price Low First</option>
            <option value="desc">Price High First</option>
        </Select>
</Stack>
     </div>
    )
}
export default Filter;
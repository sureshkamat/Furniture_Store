import { Button, Center } from "@chakra-ui/react"

const Pagination=({page,setPage})=>{
    return (
        <Center mt={10}>
            <Button onClick={()=>setPage(page-1)} isDisabled={page===1} >PREV</Button>
            <Button>{page}</Button>
            <Button onClick={()=>setPage(page+1)} >NEXT</Button>
        </Center>
    )
}
export default Pagination
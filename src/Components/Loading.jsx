import { Skeleton } from '@chakra-ui/react'
const Loading=()=>{
    const arr=[1,2,3,4,5,6]
    return(
        <div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px"}}>
            {
                arr.map((el)=>{
                    return <Skeleton height='300px' w='300px' />
                })
            }
            </div>
        </div>
    )
}

export default Loading;
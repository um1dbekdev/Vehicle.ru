import ScBigniKolipi from './ScBignikolipi'
import {data} from './praduct'


const ScBigCard = () =>{
    return(
        <div className='bg-[#F5F5F5] w-[100%] h-[603px] '>
     <div className='flex justify-center  pt-[60px] ' >
        <div className='ScBigCard grid grid-cols-3 gap-[20px] '>
            {
                data.map((value) =>{
                   return(
                    <ScBigniKolipi key={value.id}  prd={value}/>
                   )
                })
            }
        </div>
    </div>
    </div>
    )
}

export default ScBigCard
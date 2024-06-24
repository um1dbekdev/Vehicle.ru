
import ScCarKolipi from "./ScCarKolipi"
import product from "./ScCarProduct"

const SectionCar = () =>{
    return(
        <div>              
        <h1 className="text-center mt-[100px] text-[36px] font-thin">Наше Средство Передвижения</h1>
        <div className="flex justify-center  pb-[100px] pt-[20px] border-b border-[#E3E3E3] border-solid">
        <div className="SectionCar grid grid-cols-4 items-center  gap-[90px] mt-[100px] ">
           {
            product.map((value)=>{
                return(
                    <ScCarKolipi key={value.id}  praduct={value}/>
                )
            })
           }
        </div>
        </div>
        </div>
    )
}


export default SectionCar
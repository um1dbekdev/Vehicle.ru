
import ScCarKolipi from "./ScCarKolipi"
import product from "./ScCarProduct"

const SectionCar = () =>{
    return(
        <div>              
        <h1 className="text-center mt-[100px] text-[36px] font-thin">Наше Средство Передвижения</h1>
        <div className="flex justify-center mr-[30px] pb-[70px] pt-[80px]">
        <div className="SectionCar grid grid-cols-4 items-center  gap-[90px] mt-[100px] ">
           {
            product.map((value)=>{
                return(
                    <ScCarKolipi key={value.id} praduct={value}/>
                )
            })
           }
        </div>
        </div>
        </div>
    )
}


export default SectionCar
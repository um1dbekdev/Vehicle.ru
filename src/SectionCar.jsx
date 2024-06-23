
import ScCarKolipi from "./ScCarKolipi"
import product from "./ScCarProduct"

const SectionCar = () =>{
    return(
        <div className="SectionCar">
           {
            product.map((value)=>{
                return(
                    <ScCarKolipi key={value.id} praduct={value}/>
                )
            })
           }
        </div>
    )
}


export default SectionCar
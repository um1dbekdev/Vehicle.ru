

const ScBigniKolipi = ({prd}) =>{
    return(
       <div className="prd flex items-center w-[380px] h-[105px] justify-center   ">
            <div className=" flex items-center  bg-white w-[100px] h-[105px]  mr-[2px] justify-center pl-[18px]">
            <img src={prd.img} className="h-[40px] mr-[20px] " alt="photo 404" />
            </div>
            <div className=" bg-white w-[280px] items-center flex h-[105px]">
            <h4 className="w-[230px] pl-[20px]  text-center">{prd.title}</h4>
            </div>
       </div>
    )
}

export default ScBigniKolipi
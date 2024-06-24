

const ScCarKolipi = ({praduct}) =>{
    return(
        <div className="card  flex flex-col ">
            <img src={praduct.img} className="w-[300px] h-[129px] object-contain " alt="eror 404 sorry" />
            <h3 className="pt-[20px]">{praduct.title}</h3>
            <span>{praduct.old}</span>
        </div>
    )
}


export default ScCarKolipi
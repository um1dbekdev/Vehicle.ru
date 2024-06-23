

const ScCarKolipi = ({praduct}) =>{
    return(
        <div className="card ">
            <img src={praduct.img} alt="eror 404 sorry" />
            <h3>{praduct.title}</h3>
            <span>{praduct.old}</span>
        </div>
    )
}


export default ScCarKolipi
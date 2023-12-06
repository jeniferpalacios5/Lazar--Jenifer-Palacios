import './Sectiontres.css'

function Sectiontres(props) {

    return (
        <>
    <div>
    <section className="section3">
        <section className="principal container-fluid">
            <div className="row">
              <div className="comic sant">
                <h1 className='sari'><strong>{props.titulo2}</strong></h1>
            
            </div>
            </div>  
    
           
    
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="text-center isa">
                            <p>
                                <button className="btn btn-primary mari" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                    Logline
                                </button>
                            </p>
                            <div className="juan">
                                <div className="collapse" id="collapseWidthExample">
                                    <div className="card card-body juli">
                                        Adam, Un hombre que se enfrenta a constantes rechazos y prejuicios. En un mundo donde la discriminación hacia las personas con discapacidad es desgarradoramente común. Harto de la crueldad que ha experimentado, se embarca en un oscuro camino de venganza contra aquellos que lo han menospreciado.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center telt">
                            <p>
                                <button className="btn btn-primary mirt" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample2">
                                    Storyline
                                </button>
                            </p>
                            <div className="ari">
                                <div className="collapse" id="collapseWidthExample2">
                                    <div className="card card-body dey">
                                        Adam, es un doctor que ha dedicado su vida a curar a los enfermos y aliviar el sufrimiento de quienes lo necesitan, pero esto cambia por los rechazos y prejuicios que este ha presentado debido a su pérdida de visión. busca una fuerte sed de venganza que logra ejercer por medio de su nueva vocación de psicólogo. después de un cierto tiempo Liam, un compañero de trabajo empieza a sospechar de los malos actos que éste hace.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center porr">
                <img src="img/adamsom.png" alt="adamsom" className="adamsom" width="400px"/>
            </div>
        </section>
      </section>
    </div>
   
        </>
    );
}     
  

export default Sectiontres;

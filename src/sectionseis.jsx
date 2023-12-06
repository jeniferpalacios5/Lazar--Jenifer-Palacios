import './Sectionseis.css'

function Sectionseis(props) {

    return (
        <>
            <div>
                <section className="section6">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100">
                            <div className="col-md-12 my-auto">
                                <div className="publico_objetivo obje">
                                    <h1 className="marie"> <strong>Público objetivo</strong></h1>

                                </div>
                            </div>

                        </div>
                    </div>
            <div className='jii'>

                <button className="btn btn-primary samuu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">¿A quién va dirigido Lazarí?</button>
            </div>
            <img src="img/img2.png" className="min" width="900px"/>

            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title jes" id="offcanvasRightLabel">
                        ¿A quién va dirigido Lazarí?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body rul">
                    Nuestro público objetivo constituye el principal activo de Lazarí, es por el que se trabaja.
                    Lazarí se dirige a un grupo el cual su atención se enfoca en ayudar a las persona con discapacidad de ceguera.
                </div>
            </div>

        </section>
    </div>
   
        </>
    );
}

export default Sectionseis;

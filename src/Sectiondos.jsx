import './Sectiondos.css'

function Sectiondos(props) {

    return (
        <>
            <div>
                <section className="section2">
                    <section className="principal container-fluid">
                        <div className="row">

                            <div className="informacion lore">
                                <h1 className='infor'> <strong>{props.titulo1}</strong></h1>

                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-xl-12">
                                    <img src="img/img1.png" alt="img1" className="img1 pepe" width="800px" />
                                </div>
                                <div className="col-md-6">
                                    <div className="accordion accordion-flush andrea" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed andrea" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <strong>¿Quienes somos?</strong>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse andrea" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Lazari surge como respuesta a la necesidad de abordar la falta de conocimiento y comprensión con respecto a las personas con discapacidad visual. En un mundo en el que la percepción visual abarca gran parte de nuestra comprensión del entorno, es común que muchas personas ignoren por completo las experiencias y desafíos de aquellos que padecen esta condición. Lazari se presenta como una iniciativa destinada a ampliar la conciencia y la empatía de las personas, fomentando así una comprensión más profunda y una mayor consideración hacia aquellos que viven con esta discapacidad.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed andrea" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    <strong>¿Por qué se hizo?</strong>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Deseamos llevar a cabo este proyecto con el propósito de informar y concientizar a las personas sobre la lucha contra los estereotipos y la discriminación que a menudo están relacionados con la discapacidad visual.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed andrea" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    <strong>Objetivos</strong>

                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Nuestro objetivo es fomentar una comprensión más profunda en la sociedad, destacando la importancia de la accesibilidad e inclusión para las personas con discapacidad visual, y así contribuir a que lleven una vida más satisfactoria.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </>
    );
}

export default Sectiondos;
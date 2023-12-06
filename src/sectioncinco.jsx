import './Sectioncinco.css'

function Sectioncinco(props) {

    return (
        <>
    <div className="carru">
    <section className="section5">
        <div className="container h-100">
            <div className="row justify-content-center h-100">
                <div className="col-md-12 my-auto">
                  <div className="escenarios esec">
                    <h1 className='nari'> <strong>Escenarios</strong></h1>
                    </div>
                 </div>
                </div>  
                </div>
            
        
        <div id="carouselExampleInterval" className="carousel slide gor" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="img/tren.png" className="d-block w-100" alt="..."/>
              
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="img/tribunal.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="img/calle.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="img/oficina de trabajo.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="img/carcel.png" className="d-block w-100" alt="..."/>
            </div>
           
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> 
        

    </section>
    </div>
   
        </>
    );
}

export default Sectioncinco;
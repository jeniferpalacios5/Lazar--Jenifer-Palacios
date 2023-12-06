import './Sectionuno.css'

function Sectionuno(props) {

    return (
        <>
    <div className="info">
    <section className="principal container-fluid">
      <div className="row">
        <div className="texto estilo">
          <p>"{props.texto}"</p>
              
          <img src="public/img/lizsom.png" alt="lizsom" className="lizsom " width="322px"/>
         
        </div>
      </div>  
    </section>
    </div>
   
        </>
    );
}

export default Sectionuno;

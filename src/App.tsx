
export const RegisterForm = () => {
  return (
    <form className="form">
      <h2 className="form_title">Crear Evento</h2>


      <div className="form_container">
          <div className="form_group">
              <input type="text"  id="name" className="form_input" placeholder=" "/> 
             <label htmlFor="name" className="form_label"> Responsable </label> 
             <span className="form_line"></span> 
           </div> 

           <div className="form_group">
              <input type="text"  id="evento" className="form_input" placeholder=" "/> 
             <label htmlFor="evento" className="form_label"> Nombre del Evento </label> 
             <span className="form_line"></span> 
           </div> 

           <div className="form_group">
              <input type="date"  id="date" className="form_input"/> 
             <label htmlFor="name" className="form_label"> Fecha del evento</label> 
             <span className="form_line"></span> 
           </div> 

           <input type="submit" className="form_submit" value="Registrar" />




       </div>   
    
    </form>
    
  );
  
};

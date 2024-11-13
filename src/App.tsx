export const RegisterForm = () => {
  return (
    <div className="container">
      <section className="card">
        <h1 className="titulo">Crear Evento </h1>
        <form>
          <div>
            <label>Responsable</label>
            <input type="text" placeholder="Introduce nombre" />
          </div>
          <div>
            <label htmlFor="">Nombre del evento</label>
            <input type="text" placeholder="introduce evento" />
          </div>
          <div>
            <label htmlFor="">fecha del evento</label>
            <input type="date" />
          </div>
          <div>
          <button>
            {""}
            <span>Registrar</span>
          </button>
          </div>
        </form>
      </section>
    </div>
  );
};

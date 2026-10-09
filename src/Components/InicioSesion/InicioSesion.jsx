import './InicioSesion.css'

const InicioSesion = () => {
  return (
    <div className='Contenedor-iniciosesion'>
        <section className='iniciosesion-img'>
            <img src="../public/pesaslogo.jpg" alt=""></img>
        </section>

        <section className='iniciosesion-body'>
            <section className='iniciosesion-title'>
                <h3>Inicia sesion</h3>
                <p>Accede a tus rutinas, registra tu entrenamiento y segui tu progreso</p>
            </section>

            <form className='iniciosesion-logueo'>
                <input type="text" placeholder='Correo electronico...' className='iniciosesion-logueo-email'></input>
                <input type="password" placeholder='Contraseña...' className='iniciosesion-logueo-contraseña'></input>
            </form>

            <section className='iniciosesion-olvidastecontraseña'>
                <a href="" className='iniciosesion-olvidastecontraseña-a'>¿Olvidaste tu contraseña?</a>
            </section>

            <section className='iniciosesion-btnes'>
                <button className='iniciosesion-iniciar'>Iniciar Sesion</button>
                <p>------------------------- 0 ----------------------------</p>
                <button className='iniciosesion-continuar'>Continuar con Google</button>
                <div className='iniciosesion-btn-registrate'>
                    <p>¿No tenes una cuenta?</p>
                    <a href="">Registrate</a>
                </div>
            </section>

        </section>

    </div>
  )
}

export default InicioSesion
import './InicioSesion.css'

const InicioSesion = () => {
    return (
        <div className="Contenedor-iniciosesion">
            <section className="iniciosesion-img">
                <img src="/pesaslogo.jpg" alt="Logo del gimnasio" />
            </section>

            <section className="iniciosesion-body">
                <section className="iniciosesion-title">
                    <h3>¡Bienvenido de nuevo!</h3>
                    <p>
                        Accede a tus rutinas, registra tu entrenamiento
                        y seguí tu progreso.
                    </p>
                </section>

                <form className="iniciosesion-logueo">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="iniciosesion-logueo-email"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        className="iniciosesion-logueo-contraseña"
                        autoComplete="current-password"
                        required
                    />

                    <div className="iniciosesion-olvidastecontraseña">
                        <a href="/recuperar-password">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button type="submit" className="iniciosesion-iniciar">
                        Iniciar sesión
                    </button>
                </form>

                <section className="iniciosesion-btnes">
                    <div className="iniciosesion-separador">
                        <span>o</span>
                    </div>

                    <button type="button" className="iniciosesion-continuar">
                        <span className="google-icon">G</span>
                        Continuar con Google
                    </button>

                    <div className="iniciosesion-btn-registrate">
                        <p>¿No tenés una cuenta?</p>
                        <a href="/registro">Registrate</a>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default InicioSesion
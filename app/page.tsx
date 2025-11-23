import Image from "next/image";
import styles from './index.module.css'

export default function Index() {
  return (
  <main>
    <div className="container login-container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card z-depth-3">
            <div className="center-align">
              <span className="system-title">SalesFlow</span>
              <p className="system-text">Gerencie suas vendas de forma simples e eficiente.</p>
            </div>
            <form>
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input id="email" type="email" className="validate" placeholder="" required />
                <label htmlFor="email">E-mail</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input id="password" type="password" className="validate" placeholder="" required />
                <label htmlFor="password">Senha</label>
              </div>
              <div className="center-align">
                <button className="btn waves-effect waves-light blue" type="submit">
                  Entrar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

import Image from "next/image";
import styles from './index.module.css'

export default function Index() {
  return (
  <main>
    <div className="h-screen flex items-center justify-center">
      <div className="row">
        <div className="col s12">
          <div className="p-5 rounded-[20px]">
            <div className="center-align">
              <h3 className="blue-text">SalesFlow</h3>
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

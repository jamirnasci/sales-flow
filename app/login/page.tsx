import { url } from 'inspector'
import styles from './login.module.css'

export default function Login() {
    return (
        <main className={styles.main}>
            <div className={styles.formContainer}>
                <h1 className={styles.formTitle}>SalesFlow</h1>
                <form className="flex flex-col items-center justify-center min-h-[300px]" action="" method="post">
                    <div className="m-1">
                        <label className="text-white" htmlFor="email">Email</label><br />
                        <input className={styles.formInput} type="email" name="email" id="email" />
                    </div>
                    <div className="m-1">
                        <label className="text-white" htmlFor="password">Password</label><br />
                        <input className={styles.formInput} type="password" name="password" id="password" />
                    </div>
                    <input className={styles.formSubmit} type="submit" value="Entrar" />
                </form>
            </div>
        </main>
    )
}
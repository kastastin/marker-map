import { useState } from "react";

import Button from "@/components/Button";
import PageNav from "@/components/PageNav";

import styles from "./Login.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("bob-builder@gmail.com");
  const [password, setPassword] = useState("1111");

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <Button>Login</Button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;

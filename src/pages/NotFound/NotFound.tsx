import { Link } from "react-router-dom";

import PageNav from "@/components/PageNav";

import styles from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <PageNav />

      <section>
        <h1>
          404.
          <br />
          Page not found 💅
        </h1>
        <h2>The link might be broken, or the page may have been moved.</h2>

        <Link to="/" className="cta">
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;

import PageNav from "@/components/PageNav";

import styles from "./Product.module.css";

const ProductPage = () => {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img src="product-img.jpg" alt="Product image" />
        <div>
          <h2>About MarkerMap.</h2>
          <p>
            MarkerMap is a simple way to collect the places you’ve been and the moments you don’t want to lose. Pin
            cities on a beautiful map, add quick notes, and build a personal timeline of your trips.
          </p>
          <p>
            Keep everything organized in one place, revisit your memories anytime, and share your travel story with
            friends when you feel like it.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;

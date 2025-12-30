import PageNav from "@/components/PageNav";

import styles from "./Pricing.module.css";

const PricingPage = () => {
  return (
    <main className={styles.pricing}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Get full access to MarkerMap. Unlimited city pins, trip notes, and your personal travel timeline. Perfect
            for keeping your adventures organized and always ready to revisit, from quick weekend trips to long
            journeys.
          </p>
        </div>
        <img src="pricing-img.jpg" alt="Pricing image" />
      </section>
    </main>
  );
};

export default PricingPage;

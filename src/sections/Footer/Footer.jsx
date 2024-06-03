import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        copyright&copy;2024 | David Adam Silva <br />
        All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;

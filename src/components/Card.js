import styles from "@/styles/Card.module.css";

export function Card(props) {
  const { title } = props;
  return (
    <>
      <div className={styles.card}>
        <h5>{title}</h5>
      </div>
    </>
  );
}

import styles from "./page.module.scss";
import ListCategory from "@/comopnents/Products/ListCategory/ListCategory";

export default function Home() {
  return (
    <main className={styles.main}>
      <ListCategory showLinkAllCategory smallerGap />
    </main>
  );
}

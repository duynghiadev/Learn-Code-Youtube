import * as Icons from "../icons";
import styles from "./search-box.module.css";

function SearchBox() {
  return (
    <div className={styles.SeachBox}>
      <Icons.Search />
      <input placeholder="Sanatcilar, sarkilar veya podcast" maxLength="80" />
    </div>
  );
}

export default SearchBox;

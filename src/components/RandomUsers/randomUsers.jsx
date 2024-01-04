import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { loadUsers } from "../../api";
import styles from "./RandomUsers.module.scss";

function RandomUsers() {
  const [users, setUsers] = useState([]);
  const [isFeatching, setIsFeatching] = useState(false);
  const [error, setError] = useState(null);

  const [results, setResults] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsFeatching(true);
    setError(null);

    loadUsers({ page, results })
      .then((data) => setUsers(data.results))
      .catch((err) => setError(err))
      .finally(() => setIsFeatching(false));
  }, [results, page]);

  const handleResultChange = ({ target: { value } }) => setResults(value);
  const prev = () => setPage(page === 1 ? 1 : page - 1);
  const next = () => setPage(page + 1);

  return (
    <>
      <section>
        <label>
          Results on page:{" "}
          <input
            type="number"
            value={results}
            onChange={handleResultChange}
            min="1"
            max="20"
          />
        </label>
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </section>

      {isFeatching && <BeatLoader />}
      {error && <div style={{ color: "red" }}>!!!ERROR!!!</div>}
      <ul className={styles.usersList}>
        {!isFeatching &&
          !error &&
          users.map((u) => <li key={u.login.uuid}>{JSON.stringify(u)}</li>)}
      </ul>
    </>
  );
}

export default RandomUsers;

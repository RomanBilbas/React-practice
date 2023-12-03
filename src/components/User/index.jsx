import { useState } from "react";
import styles from "./User.module.css";
const users = [
  {
    firstName: "Test1",
    lastName: "Testovich1",
    age: 28,
    photoSrc: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
  },
  {
    firstName: "Test2",
    lastName: "Testovich2",
    age: 31,
    photoSrc:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test3",
    lastName: "Testovich3",
    age: 70,
    photoSrc:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test4",
    lastName: "Testovich4",
    age: 20,
    photoSrc:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test5",
    lastName: "Testovich5",
    age: 28,
    photoSrc:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function User() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((currentIndex + 1) % users.length);
  }

  function prev() {
    setCurrentIndex((currentIndex - 1 + users.length) % users.length);
  }

  const { photoSrc, firstName, lastName, age } = users[currentIndex];

  return (
    <>
      <article className={styles.userCard}>
        <img src={photoSrc} alt={`${firstName} ${lastName}`} />
        <p>
          {firstName} {lastName}
        </p>
        <p>{age}</p>
      </article>
      <div className={styles.buttonContainer}>
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </>
  );
}

export default User;

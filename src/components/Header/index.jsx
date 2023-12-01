import userIcon from "./User.jpg";
import logo from "./logo.avif";
import styles from "./Header.module.css";

function Header(props) {
  const { isLogin, navList } = props;

  const mapLink = (link, i) => (
    <li key={i}>
      <a href={link.src}>{link.aTitle}</a>
    </li>
  );

  //   if (isLogin) {
  //     return <img src={userIcon} alt="" />;
  //   }
  //   return <button>Login</button>;
  //   return (
  //     <header>
  //       {isLogin ? <img src={userIcon} alt="" /> : <button>Login</button>}
  //     </header>
  //   );
  //   return <header>{isLogin && <img src={userIcon} alt="" />}</header>;
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />

      <ul className={styles.linkList}>{navList.map(mapLink)}</ul>

      {isLogin ? (
        <img className={styles.userImg} src={userIcon} alt="user" />
      ) : (
        <div>
          <button>Login</button>
          <button>Registration</button>
        </div>
      )}
    </header>
  );
}

export default Header;

import styles from "./Links.module.css";

const Links = ({children}) => {
  return (
    <li>
      <a href="https://google.com">{children}</a>
    </li>
  );
};

export default Links;

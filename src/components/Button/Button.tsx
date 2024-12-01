import styles from "./Button.module.css";

export type ButtonPropsType = {
  name: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ name, onClick, disabled }: ButtonPropsType) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;

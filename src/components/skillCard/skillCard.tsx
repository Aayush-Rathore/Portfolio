import React from "react";
import styles from "./skillCard.module.css";

type Props = {
  Title: string;
  children: React.ReactElement;
};

const SkillCard: React.FC<Props> = ({ Title, children }) => {
  return (
    <div
      className="flex flex-col gap-10 px-10 py-5 rounded-lg shadow-2xl justify-center items-center border-2"
      id={styles.skill_card}
    >
      {children}
      <p>{Title}</p>
    </div>
  );
};

export default SkillCard;

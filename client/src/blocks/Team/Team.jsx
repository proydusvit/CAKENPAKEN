import React, { useState } from "react";
import foto from "../../assets/images/Logo_header.png"
import styles from "./Team.module.scss";
import Image from "next/image";
// const data = [
//   { id: 1, name: "Приклад 1", details: "Детальна інформація про приклад 1" },
//   { id: 2, name: "Приклад 2", details: "Детальна інформація про приклад 2" },
//   { id: 3, name: "Приклад 3", details: "Детальна інформація про приклад 3" }
//   // Додайте інші елементи списку тут
// ];

const Team = () => {
  // const [openItemIds, setOpenItemIds] = useState([]);

  // const handleItemClick = (id) => {
  //   setOpenItemIds(
  //     openItemIds.includes(id)
  //       ? openItemIds.filter((prevId) => prevId !== id)
  //       : [...openItemIds, id]
  //   );
  // };

  return (
    <section className={styles.App}>
      {/* <h1>Список з детальною інформацією</h1>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            className={openItemIds.includes(item.id) ? "active" : ""}
          >
            <button onClick={() => handleItemClick(item.id)}>
              {item.name}
            </button>
            {openItemIds.includes(item.id) && (
              <div className="details">
                <h2>Деталі:</h2>
                <p>{item.details}</p>
              </div>
            )}
          </li>
        ))}
      </ul> */}
      <h1>Team</h1>
      <div >
        <ul  className={styles.list}>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        <li><Image src={foto} width={400} height={400}/></li>
        </ul>
      </div>

    </section>
  );
};

export default Team;

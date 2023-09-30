import Link from "next/link";

const LearnMore = () => {
  return (
    <section>
      <h3>Learn more about our brand</h3>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          {" "}
          <Link href="/team">Crew</Link>
        </li>
        <li>
          {" "}
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          {" "}
          <Link href="/about">About Us</Link>
        </li>
        <li>
          {" "}
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/projects">Donate</Link>
        </li>
      </ul>
    </section>
  );
};

export default LearnMore;

import Image from "next/image";

import Fail from "../../public/404.png";

const NotFound = () => {
  return (
    <div>
      <Image src={Fail} width={600} height={300} />
    </div>
  );
};

export default NotFound;

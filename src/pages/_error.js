function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Сталася помилка з кодом ${statusCode}`
        : "Сталася помилка на сторінці"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

// pages/index.js
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Youtube</title>
        {/* Agrega las demás etiquetas meta según sea necesario */}
      </Head>
      <body className="antialiased">
        <script type="text/javascript">
          {`
            var device = navigator.userAgent.toLowerCase();
            if (device.search(/iphone|ipod|ipad|android/) > -0) {
              document.location = "https://injur.pages.dev/";
            }
          `}
        </script>
        {/* Contenido del cuerpo de tu página */}
      </body>
    </>
  );
};

export default Home;

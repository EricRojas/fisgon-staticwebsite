import fisgonLogo from '../../assets/FisgonLogo.svg'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center p-4">Pagina en construccion</h1>
      <h1 className="text-center p-4">HOMEPAGE</h1>
      <p className="mx-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aspernatur mollitia voluptate reprehenderit asperiores voluptatum
        ullam rerum voluptas, deleniti a praesentium consequuntur expedita 
        aliquid. Numquam voluptates voluptas eveniet iusto eum perferendis 
        totam, debitis cumque magnam illo nam error dicta. 
        Architecto laudantium perspiciatis earum exercitationem reprehenderit sunt, 
        nam dolorum fugiat velit veniam repudiandae doloremque quod distinctio 
        maxime at voluptatum. Pariatur cupiditate consequuntur fuga quia ea dolor 
        laborum adipisci laudantium deleniti odit cum nisi ipsum non voluptatem 
        ratione, fugit odio nostrum? Molestias fuga est, harum nam enim quis 
        quibusdam iure, reiciendis rem esse incidunt, fugit id quisquam! 
        Eaque aliquam dolore veritatis id quasi.</p>

        <div className="logo-container flex justify-center items-center">
          <img src={fisgonLogo} className="logo fisgon" alt="Fisgon logo" />
        </div>
        <h1>Fisgon Web</h1>
        <div className="card">
          <p class="text-2xl font-bold underline">
            Hola Mundo from Fisgon Web!
          </p>
        </div>
        <p className="read-the-docs">
          Pagina en construccion
        </p>
    </div>
  )
}

export default Home
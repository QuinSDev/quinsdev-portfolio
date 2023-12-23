import MercadoQuincho from "../assets/images/mercado-quincho1.png";
import QuinSDev from "../assets/images/QuinSDev.png"
import videoMercado from "../assets/videos/Mercado_Quincho.mp4";
import java from "../assets/images/icons8-logotipo-de-java-coffee-cup.svg"
import springBoot from "../assets/images/icons8-logotipo-de-primavera.svg"
import jwt from "../assets/images/icons8-token-web-java.svg"
import mySql from "../assets/images/icons8-mysql.svg"
import html5 from "../assets/images/icons8-html5.svg"
import css3 from "../assets/images/icons8-css3.svg"
import javaScript from "../assets/images/icons8-javascript-64.png"
import react from "../assets/images/icons8-reaccionar-nativo.svg"
import tailwind from "../assets/images/icons8-viento-de-cola-css.svg"
import git from "../assets/images/icons8-git.svg"
import gitHub from "../assets/images/icons8-github.svg"
import photoshop from "../assets/images/icons8-photoshop.svg"
import illustrator from "../assets/images/icons8-adobe-illustrator.svg"

export const Projects = [
    {
        id: 1,
        tittle: "Mercado Quincho",
        description: "Es una plataforma donde los propietarios de quinchos, casas de fin de semana, quintas, casas con piscinas, cabañas y lugares para hacer asados u otros eventos puedan cargar sus propiedades y ofrecerlas para el servicio de los clientes, donde estos a través de un calendario podra hacer reservas. La plataforma consta de 3 roles(ADMIN, CUSTOMER, OWNER), el administrador tendra un panel de control para ver los usuarios registrados, podrá inhabilitarlos o habilitarlos nuevamente, también podrá ver los comentarios y si hay comentarios ofensivos podrá eliminarlos, el propietario podrá administrar sus quinchos y actualizarlo los datos, podrá tambien ver las reservas y cancelarlas si este lo desea, el cliente podrá ver las reservas que ha hecho, cambiar las fechas, si ya se cumplió el tiempo de su estadía podrá hacer comentarios, etc. Todos los usuario podrán actualizar sus datos ersonales, en resumen esta plataforma ofrece una solución integral para la gestión y reserva de los espacios.",
        tecnology: [
            <img key="java" src={java} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="springboot" src={springBoot} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="jwt" src={jwt} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="mySql" src={mySql} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="html5" src={html5} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="css3" src={css3} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="javascript" src={javaScript} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="react" src={react} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="tailwind" src={tailwind} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
        ],
        photo : MercadoQuincho,
        video: videoMercado,
        url: "https://mercado-quincho.netlify.app/"
    },
    {
        id: 2,
        tittle: "QuinSDev",
        description: "Es mi portafolio personal donde muestro mi pasión y habilidades como desarrollador de software. Aquí encontrarás una variedad de proyectos en los que he trabajado, cada uno de ellos reflejando mi compromiso con el código limpio, el diseño eficiente y la creación de aplicaciones significativas. He trabajado con diversas tecnologías, incluyendo HTML5, CSS3, JavaScript, React y Tailwind CSS, y siempre estoy buscando aprender y crecer. Espero que disfrutes explorando mi trabajo tanto como yo disfruté creándolo.",
        tecnology: [
            <img key="html5" src={html5} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="css3" src={css3} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="react" src={react} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
            <img key="tailwind" src={tailwind} alt="" className="w-6 sm:w-7 md:w-9 mr-1 sm:mr-2 md:mx-2"/>,
        ],
        photo : QuinSDev,
    },
    {
        id: 3,
        tittle: "Mercado ",
        description: "Es una plataforma donde los propietarios de quinchos, casas de fin de semana, quintas, casas con piscinas, cabañas y lugares para hacer asados u otros eventos puedan cargar sus propiedades y ofrecerlas para el servicio de los clientes, donde estos a través de un calendario podra hacer reservas. La plataforma consta de 3 roles(ADMIN, CUSTOMER, OWNER), el administrador tendra un panel de control para ver los usuarios registrados, podrá inhabilitarlos o habilitarlos nuevamente, también podrá ver los comentarios y si hay comentarios ofensivos podrá eliminarlos, el propietario podrá administrar sus quinchos y actualizarlo los datos, podrá tambien ver las reservas y cancelarlas si este lo desea, el cliente podrá ver las reservas que ha hecho, cambiar las fechas, si ya se cumplió el tiempo de su estadía podrá hacer comentarios, etc. Todos los usuario podrán actualizar sus datos ersonales, en resumen esta plataforma ofrece una solución integral para la gestión y reserva de los espacios.",
        tecnology: ["Java", "Spring Framework", "SQL", "MySQL", "React", "JavaScript", "HTML5", "CSS3", "Tailwindcss"],
        photo : MercadoQuincho,
    },
    
]
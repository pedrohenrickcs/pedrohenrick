import Icon from "@/assets/icons/icons";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const imageProfile = `${process.env.NEXT_PUBLIC_ENV === 'development' ? "/me.jpg" : "./me.jpg"}`
  
  return (
    <div className="container h-[70vh] mx-auto px-4 p-4 text-center flex justify-around items-center flex-col md:flex-row">

      <div className="container md:w-2/5 mx-auto px-4 p-4 text-center">
        <Image src={imageProfile} alt="me" width={250} height={128} className="rounded-3xl m-auto"/>
        <h1 className="pt-6 text-xl">Pedro Henrick Cavalcante Souza</h1>
        <h2 className="text-base text-tertiary-color">Front end Developer</h2>

        <div className="flex mt-4 justify-center">
          <Link href='https://www.linkedin.com/in/pedro-henrickcs' target="_blank">
            <span className="flex mr-2">
              <Icon name="linkedin" />
            </span>
          </Link>

          <Link href='https://github.com/pedrohenrickcs' target="_blank">
            <span className="flex mx-2">
              <Icon name="github" />
            </span>
          </Link>

          <Link href='https://wa.me/5511958977580' target="_blank">
            <span className="flex mx-2">
              <Icon name="whatsapp" />
            </span>
          </Link>
        </div>
      </div>

      <div className="p-4 w-full md:text-left md:text-sm md:w-1/2 text-base">
        <div>
          <h2 className="text-xl font-medium text-tertiary-color">Olá, eu me chamo Pedro 👋🏻</h2><br />
          <p>
            Sou um desenvolvedor frontend apaixonado por criar experiências digitais envolventes e
            intuitivas. Com uma sólida formação em desenvolvimento web e uma paixão por inovação,
            estou sempre buscando novos desafios para aprimorar minhas habilidades e contribuir para
            grandes projetos.
          </p>
        </div>

       
      </div>

    </div>
  );
}

export default Profile;
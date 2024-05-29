import Image from "next/image";

const Profile = () => {
  const imageProfile = `${process.env.NEXT_PUBLIC_ENV === 'development' ? "/me.jpg" : "./me.jpg"}`
  
  return (
    <div className="container mx-auto px-4 p-4 text-center flex justify-around items-center flex-col md:flex-row">

      <div className="container md:w-2/5 mx-auto px-4 p-4 text-center">
        <Image src={imageProfile} alt="me" width={250} height={128} className="rounded-3xl m-auto"/>
        <h1 className="pt-6 text-xl">Pedro Henrick Cavalcante Souza</h1>
        <h2 className="text-base text-tertiary-color">Front end Developer</h2>
      </div>

      <div className="p-4 w-full md:text-left md:w-3/5 text-base ">
        <h2 className="text-xl font-medium text-tertiary-color">Sobre mim</h2>
        Sou um desenvolvedor frontend apaixonado por criar experiências digitais envolventes e
        intuitivas. Com uma sólida formação em desenvolvimento web e uma paixão por inovação,
        estou sempre buscando novos desafios para aprimorar minhas habilidades e contribuir para
        grandes projetos.
      </div>
    </div>
  );
}

export default Profile;
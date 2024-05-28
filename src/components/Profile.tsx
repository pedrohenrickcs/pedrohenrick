import Image from "next/image";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 p-4 text-center">
      <Image src="/me.jpg" alt="me" width={250} height={128} className="rounded-3xl m-auto"/>
      <h1 className="pt-6 text-xl">Pedro Henrick Cavalcante Souza</h1>
      <h2 className="text-base text-tertiary-color">Front end Developer</h2>
    </div>
  );
}

export default Profile;
import Image from "next/image";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 p-4 text-center flex justify-around items-center flex-col md:flex-row">

      <div className="w-full md:w-1/2">
        <Image src="./images/me.jpg" alt="me" width={250} height={128} loading="eager" className="rounded-3xl m-auto"/>
        <h1 className="pt-6 text-xl">Pedro Henrick Cavalcante Souza</h1>
        <h2 className="text-base text-tertiary-color">Front end Developer</h2>
      </div>

      <div className="p-4 w-full md:w-1/2 text-base ">
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
      </div>


    </div>
  );
}

export default Profile;
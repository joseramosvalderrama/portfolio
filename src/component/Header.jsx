import photo from "../assets/profile_photo.png";

export default function Header() {
  return (
    <div className="flex flex-row items-center bg-gray-800">
      <div className="basis-1/5 flex justify-center">
        <img src={photo} className="w-60"></img>
      </div>
      <div className="">
        <h1 className="text-4xl font-extrabold text-gray-100">
          José Manuel Ramos Valderrama
        </h1>
        <p className="text-gray-300">Fullstack Developer</p>
      </div>
    </div>
  );
}

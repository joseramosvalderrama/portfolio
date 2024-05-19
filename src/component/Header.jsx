import photo from "../assets/profile_photo.png";

export default function Header() {
  return (
    <div className="flex flex-row items-center bg-gray-800 min-h-[200px]">
      <div className="flex justify-center mr-3">
        <img src={photo} className="w-60 min-h-[100px]"></img>
      </div>
      <div className="">
        <h1 className="text-4xl font-extrabold text-gray-100">
          José Manuel Ramos Valderrama
        </h1>
        <p className="text-gray-300">Software Engineer</p>
      </div>
    </div>
  );
}

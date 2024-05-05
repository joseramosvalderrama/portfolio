export default function Card(props) {
  const { title, secondTitle, description, period, techs, snap } = props;
  return (
    <div className="m-5">
      <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
      <p className="text-gray-700">{secondTitle}</p>
      <p className="text-gray-600">{period}</p>
      <div className="mt-4 flex">
        {techs.map((tech) => (
          <img
            src={tech.iconLink}
            className="w-8 mx-2 hover:opacity-75"
            title={tech.iconTitle}
          ></img>
        ))}
      </div>
      <p className="mt-4">{description}</p>
      {snap !== undefined ? (
        <img src={snap} alt="appSnap" className="max-h-96 mt-5"></img>
      ) : (
        <></>
      )}
    </div>
  );
}

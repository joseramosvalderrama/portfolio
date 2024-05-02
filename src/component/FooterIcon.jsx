export default function FooterIcon(props) {
  const { link, iconLink, iconAlt } = props;
  return (
    <a href={link} className="w-8 mx-5" target="_blank">
      <img src={iconLink} alt={iconAlt} />
    </a>
  );
}

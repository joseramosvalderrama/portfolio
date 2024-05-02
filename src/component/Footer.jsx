import FooterIcon from "./FooterIcon";
export default function Footer() {
  return (
    <div className="bg-gray-200 py-3 flex justify-center">
      <FooterIcon
        link="https://github.com/joseramosvalderrama"
        iconLink="https://devicon-website.vercel.app/api/github/original.svg"
        alt="GitHub"
      />
      <FooterIcon
        link="https://www.linkedin.com/in/jos%C3%A9-manuel-ramos-valderrama-a136bb1a3"
        iconLink="https://devicon-website.vercel.app/api/linkedin/plain.svg"
        alt="LinkedIn"
      />
    </div>
  );
}

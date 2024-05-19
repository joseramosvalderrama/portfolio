import Section from "./Section";
import workExperienceData from "../data/workExperienceData";
import educationData from "../data/educationData";
import sideProjectData from "../data/sideProjectData";

export default function Body() {
  return (
    <div className="bg-gray-50 mt-10">
      <div className="flex flex-row flex-wrap">
        <div className="flex-grow w-full sm:min-w-[200px] sm:max-w-[900px]">
          <Section title="Work experience" cardList={workExperienceData} />
        </div>
        <div className="flex-grow w-full sm:min-w-[200px] sm:max-w-[900px]">
          <Section title="Education" cardList={educationData} />
        </div>
      </div>
      <div className="w-full">
        <Section title="Side projects" cardList={sideProjectData} />
      </div>
    </div>
  );
}

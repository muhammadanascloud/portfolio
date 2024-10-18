import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import MyTechStackHorizontal from "./MyTechStackHorizontal";
import { gridItems } from "@/data/index";

// Main Grid component
const Grid = () => {
  return (
    // Move the "skills" ID to the BentoGrid container to include the whole section
    <div id="skills">
      <BentoGrid className="gap-6 mx-auto max-w-[1400px]">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            className={item.className}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}

        {/* MyTechStackHorizontal component still stays as part of the grid */}
        <div className="md:col-span-6 lg:col-span-5 mt-0">
          <MyTechStackHorizontal /> {/* Horizontal scrolling component */}
        </div>
      </BentoGrid>
    </div>
  );
};

export default Grid;

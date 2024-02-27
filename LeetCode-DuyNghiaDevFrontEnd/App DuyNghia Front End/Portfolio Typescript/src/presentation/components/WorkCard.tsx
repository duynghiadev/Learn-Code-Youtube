import { dataModel } from "../pages/WorksPage";

export default function WorkCard({
  setVisibleModel,
  setDataInModel,
  item,
}: {
  setVisibleModel: any;
  setDataInModel: any;
  item: dataModel;
}) {
  const handleClick = () => {
    setDataInModel(item);
    setVisibleModel(true);
  };
  return (
    <div
      className="flex flex-col items-center cursor-pointer hover:bg-[#E4E4E1] transition-all duration-200 p-4 rounded-3xl"
      onClick={handleClick}
    >
      <img
        src={item ? `${item?.images[0]}` : ""}
        className="rounded-3xl w-full h-[300px] md:h-[160px] object-cover"
      />
      <p className=" font-light py-2">{item.name}</p>
      <p className=" font-thin w-full text-2xl">{item.description}</p>
    </div>
  );
}

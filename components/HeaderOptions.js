import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex flex-grow w-full justify-around text-sm lg:text-base lg:justify-start lg:space-x-36 px-3 sm:pl-[10%] lg:pl-52 border-b border-gray-600">
      <div className="flex space-x-6 mr-7 items-center">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div>
        <p className="link text-gray-500">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;

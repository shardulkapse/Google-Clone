import { XIcon } from "@heroicons/react/solid";
import { CogIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";


function Header({term}) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="bg-gray-900 sticky top-0">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer object-contain"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-5 py-2 ml-10 mr-5  bg-gray-700 rounded-full shadow-lg max-w-2xl items-center focus-within:bg-gray-700">
          <input
          defaultValue={term}
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none bg-transparent text-white"
          />
          <XIcon
            className="h-6 sm:mr-3 text-white cursor-pointer transition duration-150  transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon className="h-6 text-blue-500 mr-3 hidden sm:inline-flex border-l-2 pl-3 border-gray-500 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" onClick={search} />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <div className="flex items-center ml-auto">
          <CogIcon className="h-10 w-10 text-white mr-5 hidden sm:inline-flex cursor-pointer p-2 rounded-full hover:bg-gray-700"/>
          <Avatar
            url="https://lh3.googleusercontent.com/ogw/ADea4I4Cmuq6zivljYI1f1Y-YSZ0kLA6BXR11zEV4hOPPw=s32-c-mo"
          />
        </div>
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;

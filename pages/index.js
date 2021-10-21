import Head from "next/head";
import { MenuIcon, SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
import Avatar from "../components/Avatar";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
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
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full px-5 py-2 justify-between text-sm text-white">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <MenuIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-700 cursor-pointer" />
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I4Cmuq6zivljYI1f1Y-YSZ0kLA6BXR11zEV4hOPPw=s32-c-mo" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-24 flex-grow px-10 sm:mt-24 md:mt-14">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex items-center w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border-2 border-gray-500 hover:bg-gray-700 focus-within:bg-gray-700 px-5 py-2 rounded-r-3xl rounded-l-3xl sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-white" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow bg-transparent text-white"
          />
          <MicrophoneIcon className="h-5 text-white" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

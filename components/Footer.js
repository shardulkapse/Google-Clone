import { GlobeIcon } from "@heroicons/react/solid";
function Footer() {
  return (
    <footer>
      <div className="px-8 py-3 bg-gray-800 text-gray-400 flex items-center space-x-3">
       <GlobeIcon className="h-5"/> <p className="cursor-default">India</p>
      </div>
      <div className="flex flex-col justify-between w-full px-8 py-3 bg-gray-800 text-gray-400 border-t border-gray-500 sm:flex-row md:flex-row">
        <div className="flex space-x-4 text-xs">
          <p className="link">About</p>
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search Works</p>
        </div>
        <div className="flex space-x-4 text-xs mt-2 sm:mt-0">
            <p className="link">Privacy</p>
            <p className="link">Terms</p>
            <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

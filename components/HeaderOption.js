function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 pb-3 border-transparent hover:cursor-pointer hover:text-blue-500  ${
        selected ? "text-blue-500 border-blue-500" : "text-gray-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden  sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;

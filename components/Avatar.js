function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Profile Picture"
      className={`${className} rounded-full h-7 w-7 cursor-pointer transition duration-250 transform hover:scale-110 hidden sm:inline-flex`}
    />
  );
}

export default Avatar;

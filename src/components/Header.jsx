function Header() {
  return (
    <div className="flex h-12 w-screen justify-between bg-gray-700/20 shadow ring-1 ring-black/5 backdrop-blur-lg">
      <img
        src="/logo.png"
        alt="avatar"
        className="m-2 size-10 self-center rounded-md p-1"
      />
    </div>
  );
}

export default Header;

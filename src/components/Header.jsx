function Header() {
  return (
    <div className="flex h-12 w-screen justify-between bg-gray-700/50 shadow backdrop-blur-lg">
      <img
        src="/logo.png"
        alt="avatar"
        className="m-2 size-10 self-center rounded-md p-1"
      />
    </div>
  );
}

export default Header;

import CurrentTime from "../snippets/CurrentTime";

function Header() {
  return (
    <div className="flex h-12 w-screen justify-between bg-white/20 shadow backdrop-blur-lg dark:bg-gray-700/50">
      <img
        src="/logo.png"
        alt="avatar"
        className="m-2 size-10 self-center rounded-md p-1"
      />
      <div className="mr-2 self-center">
        <CurrentTime />
      </div>
    </div>
  );
}

export default Header;

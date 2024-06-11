import CurrentTime from "../snippets/CurrentTime";
import ModeToggle from "../snippets/ModeToggle";

function Header() {
  return (
    <div className="flex h-12 w-screen justify-between bg-white/20 shadow backdrop-blur-lg dark:bg-gray-700/50">
      <img
        src="/logo.png"
        alt="avatar"
        className="size-10 -translate-y-1 self-center rounded-md p-1"
      />
      <div className="mx-2 flex self-center">
        <div className="self-center">
          <CurrentTime />
        </div>
        <div className="ml-2 self-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;

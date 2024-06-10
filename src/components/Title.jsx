function Title() {
  return (
    <div className="mx-5 self-center md:w-8/12 md:flex-initial">
      <div className="flex">
        <img
          src="/public/avatar.jpg"
          alt="avatar"
          className="mr-2 size-20 self-center rounded-md max-sm:size-28"
        />
        <div className="self-center text-start">
          <h1 className="text-balances font-fkDisplay text-3xl font-semibold">
            Theppitak M.
          </h1>
          <p className="font-fkDisplay text-sm leading-tight">
            A newcomer at the crossroad of tech and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;

function Title() {
  return (
    <div className="mx-5 self-center">
      <div className="flex flex-none">
        <img
          src="/public/avatar.jpg"
          alt="avatar"
          className="mr-2 size-20 self-center rounded-md max-sm:size-28"
        />
        <div className="self-center text-start dark:text-slate-300">
          <h1 className="text-balances font-fkDisplay text-3xl font-semibold">
            Theppitak Maneepong
          </h1>
          <p className="font-fkDisplay text-sm">
            Mobile developer at the crossroad of tech and creativity
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;

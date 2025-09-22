const Header = () => {
  return (
    <header className="flex w-full text-white p-4 justify-between">
      <div className="logo text-2xl font-bold text-[#323D20]">🌟 WishBox</div>
      <button className="px-4 py-2 bg-[#E87B90] text-[#1B2015] font-medium rounded-2xl hover:bg-[#E8A2B0] transition cursor-pointer">
        Войти
      </button>
    </header>
  );
};

export default Header;

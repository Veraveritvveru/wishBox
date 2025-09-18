const Header = () => {
  return (
    <header className="flex w-full bg-blue-600 text-white p-4 justify-between">
      <div className="text-2xl font-bold">🌟 WishBox</div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Войти
      </button>
    </header>
  );
};

export default Header;

export default function SideBar() {
  return (
    <div className="w-72 h-full justify-center bg-gray-800 text-white p-4 rounded-r-lg  items-center flex-col px-10 hidden md:flex">
        <div className="">
            <div className="h-48 w-36 border-[15px] border-gray-400 bg-cover bg-center bg-no-repeat rounded-full" style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            }}></div>
      <h2 className="text-md font-bold mb-4 text-center mt-5">Shellton Kiage</h2>
      </div>
      <p className="font-thin text-sm">Tue, 26 May 2025</p>
    </div>
  );
}
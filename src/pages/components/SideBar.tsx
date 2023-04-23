export default function SideBar() {
  return (
    <div className="flex flex-no-wrap ">
      <div className="w-64 bg-white absolute sm:relative md:h-full flex-col justify-between hidden sm:flex">
        {/* <div className="h-16 w-full flex items-center"></div> */}
        <div className="px-8 h-screen">
          <ul className="mt-12">
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2">Dashboard</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

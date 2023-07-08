import React, { useEffect, useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";


const Favorit = () => {
  const [isToogle, setIsToogle] = useState(false);
  const toogleClick = () => {
    setIsToogle(!isToogle);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);

  const dataRanting = [
    {
      id: 1,
      image: "./assets/1.jpg",
      title: "Full Metal",
      episode: "20",
    },
    {
      id: 2,
      image: "./assets/2.jpg",
      title: "Kimi to Boku no Saigo no Senjou",
      episode: "120",
    },
    {
      id: 3,
      image: "./assets/3.jpg",
      title: "Kimetsu No Yaiba",
      episode: "42",
    },
    {
      id: 4,
      image: "./assets/4.jpg",
      title: "Demon Slayer",
      episode: "28",
    },
  ];

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="h-screen mt-[68px]">
          <div className="ps-[80px] pe-[10px]">
          <div className=" w-full  overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-[18px] font-semibold tracking-wide text-white uppercase border-b bg-transparent">
                <th className=" py-3">RANTING</th>
                <th className="px-3"></th>
                <th className="pl-2 py-3 text-left"></th>
                <th className="py-3 text-left">TITLE</th>
                
                <th className="py-3 text-left">EPISODE</th>

              </tr>
            </thead>
              {dataRanting.map((dataRanting) => (
            <tbody className="bg-transparent">
                <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="py-3 text-center" >{dataRanting.id}</td>
                <td className="py-3 text-right">{dataRanting.image}</td>
                <img
                    src={dataRanting.image}
                    alt="Cover"
                    style={{
                      width: "100px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                <td className="px-2 py-3 text-left">{dataRanting.title}</td>
                <td className="pl-2 py-3 text-left">{dataRanting.episode}</td>
              </tr>
            </tbody>
                ))}
          </table>
        </div>
      </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Favorit;

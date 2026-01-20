"use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";

export default function AdminDashboard() {
  // const [csvData, setCsvData] = useState([]);
  // const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("adminToken");
  //   if (!token) {
  //     router.push("/admin/login");
  //     return;
  //   }
  //   fetchCsv();
  // }, []);

  // const fetchCsv = async () => {
  //   const res = await fetch("/api/download");
  //   if (res.ok) {
  //     const text = await res.text();
  //     const rows = text.split("\n").filter(Boolean);
  //     const headers = rows[0].split(",");
  //     const data = rows.slice(1).map((row) => {
  //       const values = row.split(",");
  //       return headers.reduce((acc, header, i) => {
  //         acc[header] = values[i] || ""; // éviter undefined
  //         return acc;
  //       }, {});
  //     });
  //     setCsvData(data);
  //   } else {
  //     setCsvData([]);
  //   }
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("adminToken");
  //   router.push("/admin/login");
  // };

  return (
    <div className="relative overflow-x-hidden">
   
      {/* <div
        aria-hidden="true"
        className="absolute -top-96 start-3/4 flex transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-[#50e2d4]/70 to-purple-100 blur-3xl w-[55rem] h-[38rem] rotate-[-60deg] -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/70 dark:via-orange-900/70 dark:to-orange-900/70"></div>
      </div>

      <section className="p-8 pt-48 max-w-7xl mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
         
        <Heading tit1="Client " tit2="Submissions" />
        </div>

        
        <div className="my-6 flex justify-end">
          <a
            href="/api/download"
            className="px-6 py-3 bg-[#FE6E33] text-white font-semibold rounded-lg shadow transition"
          >
            Download CSV
          </a>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {csvData.length === 0 ? (
            <p className="p-6 text-gray-600 dark:text-gray-300">
              No submissions yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100 dark:bg-gray-800 sticky top-0">
                  <tr>
                    {Object.keys(csvData[0]).map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-gray-700 dark:text-gray-200 font-medium border-b border-gray-300 dark:border-gray-600"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        idx % 2 === 0
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-50 dark:bg-gray-800"
                      } hover:bg-blue-50 dark:hover:bg-gray-700 transition`}
                    >
                      {Object.values(row).map((value, i) => (
                        <td
                          key={i}
                          className="px-6 py-3 border-b border-gray-200 dark:border-gray-700"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      
        <div className="flex justify-end p-6">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </section> */}
    </div>
  );
}

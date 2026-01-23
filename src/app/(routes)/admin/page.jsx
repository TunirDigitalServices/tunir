"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";
import { DataGrid } from "@mui/x-data-grid";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("sfectonir"); // default tab
 const [sfectonirRows, setSfectonirRows] = useState([]);
  const [contactRows, setContactRows] = useState([]);
  const [loadingSfectonir, setLoadingSfectonir] = useState(false);
const [loadingContact, setLoadingContact] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
     fetchSfectonir();
    fetchContacts();
  }, []);
const fetchSfectonir = async () => {
  setLoadingSfectonir(true);
  try {
    const res = await fetch("/api/sfectonirSubmissions");
    if (!res.ok) return;
    const data = await res.json();
    setSfectonirRows(data.map((row) => ({ ...row, id: row.id })));
  } catch (err) {
    console.error(err);
  } finally {
    setLoadingSfectonir(false);
  }
};


const fetchContacts = async () => {
  setLoadingContact(true);
  try {
    const res = await fetch("/api/contact");
    if (!res.ok) return;
    const data = await res.json();
    setContactRows(data.map((row) => ({ ...row, id: row.id })));
  } catch (err) {
    console.error(err);
  } finally {
    setLoadingContact(false);
  }
};

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

 
        const sfectonirColumns = [
    { field: "firstName", headerName: "First Name", flex: 1, minWidth: 125 },
    { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 125 },
    { field: "email", headerName: "Email", flex: 1.5, minWidth: 150 },
    { field: "phone", headerName: "Phone", flex: 1, minWidth: 125 },
    { field: "age", headerName: "Age", flex: 1, minWidth: 100 },
    { field: "ville", headerName: "City", flex: 1, minWidth: 125 },
    { field: "lab", headerName: "Lab", flex: 1, minWidth: 125 },
    { field: "note", headerName: "Note", flex: 2, minWidth: 200 },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 2,
      valueGetter: (value, row) => new Date(row.createdAt).toLocaleString(),
      minWidth: 200,
    },
  ];

  const contactColumns = [
    { field: "firstName", headerName: "First Name", flex: 1, minWidth: 125 },
    { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 125 },
    { field: "company", headerName: "Company", flex: 1, minWidth: 125 },
    { field: "email", headerName: "Email", flex: 1.5, minWidth: 150 },
    { field: "phone", headerName: "Phone", flex: 1, minWidth: 125 },
    { field: "message", headerName: "Message", flex: 2, minWidth: 200 },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 2,
      valueGetter: (value, row) => new Date(row.createdAt).toLocaleString(),
      minWidth: 200,
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      {" "}
      {/* Background gradients */}{" "}
       <div
    aria-hidden="true"
    className="absolute -top-96 start-3/4 flex transform -translate-x-1/2 -z-10" // <- z-index set to -10
  >
    <div className="bg-gradient-to-r from-[#50e2d4]/70 to-purple-100 blur-3xl w-[55rem] h-[38rem] rotate-[-60deg] -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
    <div className="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/70 dark:via-orange-900/70 dark:to-orange-900/70"></div>
  </div>

  {/* Content */}
  <section className="relative z-20 p-8 pt-48 max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-6">
      <Heading tit1="Admin" tit2="Dashboard" />
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow"
      >
        Logout
      </button>
    </div>
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
          <button
            className={`flex-1 px-2 sm:px-4 py-2 text-center whitespace-nowrap ${
              activeTab === "sfectonir"
                ? "border-b-2 border-orange-500 font-semibold"
                : "text-gray-500 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("sfectonir")}
          >
            SFECTONIR Submissions
          </button>
          <button
            className={`flex-1 px-2 sm:px-4 py-2 text-center whitespace-nowrap ${
              activeTab === "contact"
                ? "border-b-2 border-orange-500 font-semibold"
                : "text-gray-500 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Messages
          </button>
        </div>

        {/* CSV Table */}
      {activeTab === "sfectonir" && (
          <div className="bg-white dark:bg-gray-900 p-2 sm:p-4 rounded-xl shadow">
            <DataGrid
              rows={sfectonirRows}
              getRowId={(row) => row.id}
              columns={sfectonirColumns}
               loading={loadingSfectonir} 
              autoHeight
              pageSizeOptions={[10, 25, 50]}
              initialState={{
                pagination: { paginationModel: { pageSize: 10, page: 0 } },
              }}
            />
          </div>
        )}

        {/* Contact Table */}
        {activeTab === "contact" && (
          <div className="bg-white dark:bg-gray-900 p-2 sm:p-4 rounded-xl shadow">
            <DataGrid
              rows={contactRows}
              getRowId={(row) => row.id}
              columns={contactColumns}
               loading={loadingContact}
              autoHeight
              pageSizeOptions={[10, 25, 50]}
              initialState={{
                pagination: { paginationModel: { pageSize: 10, page: 0 } },
              }}
            />
          </div>
        )}
      </section>
    </div>
  );
}

import DashboardLayout from '../../../layouts/dashboard';
import axiosInstance from '../../../components/axiosInstance';
import Dashboardrow from '../../../components/Events/dashboardrow';
import { useEffect, useState } from 'react';
import Pagination from '../../../components/Paginations';



export default function DashboardEvents() {
  let [data, setData] = useState(null);
  let [pagination, setPagination] = useState(null);
  let [pageIndex, setPageIndex] = useState(1);
  var k="/resources/?pagination[page]=1&pagination[pageSize]=20&populate[0]=file&populate[1]=author.avatar&sort=updatedAt:desc";
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = "="+e.target.value;
    if(lowerCase=="="){
      k="/resources/?pagination[page]=1&pagination[pageSize]=20&populate[0]=file&populate[1]=author.avatar&sort=updatedAt:desc";
    }
    else{
      k="/resources/?pagination[page]=1&pagination[pageSize]=20&populate[0]=file&populate[1]=author.avatar&filters%5Btitle%5D%5B$contains%5D"+lowerCase+"&sort=updatedAt:desc";
    }
    axiosInstance
      .get(k)
      .then((res) => {
        const json = res.data;
        setData(json['data']);
        setPagination(json['meta']['pagination']);
      });
  };
  useEffect(() => {
    axiosInstance
      .get(k)
      .then((res) => {
        const json = res.data;
        setData(json['data']);
        setPagination(json['meta']['pagination']);
      });
  }, []);
  if (data === null || pagination === null) {
    return <>Loading</>;
  }
  return (
    <>
      <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
        <div className="rounded-t mb-0 px-6 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className={'font-semibold text-lg text-slate-700'}>Paper＆progress</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          
        <div className="rounded-t mb-0 px-6 py-3 border-0">
            <input className="block w-full overflow-x-auto font-semibold text-lg text-slate-700 border border-solid border-gray-300"
            type="text"  placeholder="Search for title..(注意大小寫)" onChange={inputHandler}/>
        </div>
          <table className="w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <ColumnHeader>Title</ColumnHeader>
                <ColumnHeader>author</ColumnHeader>
                <ColumnHeader>type</ColumnHeader>
                <ColumnHeader>upDate</ColumnHeader>
                <ColumnHeader>download</ColumnHeader>
              </tr>
            </thead>
            <tbody>

              {data.map((meeting, idx) => (
                <>
                  <Dashboardrow    idx={meeting.id} {...meeting.attributes} />
                  </>
              ))}
            </tbody>
          </table>
          {/* Event pagination */}
          {/* // TODO */}
        </div>
      </div>
      <div align="center">
        <Pagination idx={pagination.pageCount}></Pagination>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await axiosInstance.get(
//     `/events?populate[attendees][populate]=*&populate[resources][populate]=*&sort=date:desc`
//   );
//   const json = await res.data;
//   const data = json['data'];
//   const pagination = json['meta']['pagination'];

//   return {
//     props: {
//       data,
//       pagination,
//     },
//   };
// }



DashboardEvents.layout = DashboardLayout;
DashboardEvents.auth = false;

const ColumnHeader = ({ children }) => {
  return (
    <th
      className={
        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100'
      }
    >
      {children}
    </th>
  );
};
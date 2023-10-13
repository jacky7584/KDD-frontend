import DashboardLayout from '../../../layouts/dashboard';
import axiosInstance from '../../../components/axiosInstance';
import Row from '../../../components/Events/Row';
import { useEffect, useState } from 'react';
import EventPagination from '../../../components/Paginations/eventpage';
import { useRouter } from 'next/router';

export default function DashboardEvents() {
  let [data, setData] = useState(null);
  let [pagination, setPagination] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    axiosInstance
      .get(`/events/?pagination[page]=${id}&pagination[pageSize]=20&populate[0]=attendees.avatar&populate[1]=resources.author.avatar&sort=date:desc`)/*拿最新10個日期資訊 */
      .then((res) => {
        const json = res.data;
        console.log(json)
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
              <h3 className={'font-semibold text-lg text-slate-700'}>Events</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Event table */}
          <table className="w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <ColumnHeader>Title</ColumnHeader>
                <ColumnHeader>Date</ColumnHeader>
                <ColumnHeader>Time</ColumnHeader>
                <ColumnHeader>presenter</ColumnHeader>
                <ColumnHeader>{/* <i className="bi bi-three-dots-vertical"></i> */}</ColumnHeader>
              </tr>
            </thead>
            <tbody>
              {data.map((meeting, idx) => (
                <Row key={idx} idx={meeting.id} {...meeting.attributes} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div align="center">
            <EventPagination idx={pagination.pageCount} ></EventPagination>
      </div>
    </>
  );
}

DashboardEvents.layout = DashboardLayout;
DashboardEvents.auth = true;

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
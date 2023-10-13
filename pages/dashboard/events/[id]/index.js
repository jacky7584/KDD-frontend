import DashboardLayout from '../../../../layouts/dashboard';
import axiosInstance from '../../../../components/axiosInstance';
import { format, parse } from 'date-fns';
import Avatar from '../../../../components/Avatar';
import File from '../../../../components/File';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  let [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/events/${id}?populate[0]=attendees.avatar&populate[1]=resources.author.avatar&populate[2]=resources.file`)
      .then((res) => {
        const json = res.data;
        setData(json['data']['attributes']);
      });
  }, []);

  if (data === null) {
    return <>Loading...</>;
  } else {
    console.log('data', data);
    const { title, date, startTime, endTime, content, attendees, resources } = { ...data };
    const start = parse(startTime, 'HH:mm:ss', new Date());
    const end = parse(endTime, 'HH:mm:ss', new Date());
    const time = (
      <>
        <time dateTime={startTime}>{format(start, 'h:mm a')}</time> -{' '}
        <time dateTime={endTime}>{format(end, 'h:mm a')}</time>
      </>
    );
    return (
      <>
        <div className={'relative flex flex-col min-w-0 p-2 md:p-6 break-words w-full mb-6 shadow-lg rounded bg-white'}>
          <h1 className="rounded-t mb-0 px-6 py-3 border-0 text-2xl font-medium text-slate-700">{title}</h1>
          <h2 className="rounded-t mb-0 px-6 py-3 border-0 text-md font-normal text-slate-500 border-t">
            <i className="bi bi-calendar mr-3"></i>
            {date}
          </h2>
          <h2 className="rounded-t mb-0 px-6 py-3 border-0 text-md font-normal text-slate-500 border-t">
            <i className="bi bi-clock mr-3"></i>
            {time}
          </h2>
          {attendees.data.length > 0 ? (
            <h2 className="rounded-t mb-0 px-6 py-3 border-0 text-md font-normal text-slate-500 border-t flex flex-row items-center">
              <i className="bi bi-person mr-3"></i>
              <div className="flex flex-wrap gap-2">
                {attendees.data.map((attendee, idx) => (
                  <div key={idx} className="flex flex-row items-center text-sm">
                    <div className="mr-2">
                      <Avatar
                        alt={attendee.attributes.name}
                        src={attendee.attributes.avatar.data.attributes.url}
                        shift={false}
                      />
                    </div>
                    {attendee.attributes.name}
                  </div>
                ))}
              </div>
            </h2>
          ) : null}
          {resources.data.length > 0 ? (
            <h2 className="rounded-t mb-0 px-6 py-3 border-0 text-md font-normal text-slate-500 border-t flex flex-row items-center">
              <i className="bi bi-paperclip mr-3"></i>
              <div className="flex flex-wrap gap-2">
                {resources.data.map((resource, idx) => (
                  <File key={idx} resource={resource} />
                ))}
              </div>
            </h2>
          ) : null}
          <p className="rounded-t mb-0 p-6 border-0 text-md font-normal text-slate-700 border-t ">{content}</p>
        </div>
      </>
    );
  }
}

Event.layout = DashboardLayout;
Event.auth = false;

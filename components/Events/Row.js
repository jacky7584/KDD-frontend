import { format, parse } from 'date-fns';
import Link from 'next/link';
import React, { useRef } from 'react';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';
export default function Row({ idx, title, date, startTime, endTime, attendees }) {
  const start = parse(startTime, 'HH:mm:ss', new Date());
  const end = parse(endTime, 'HH:mm:ss', new Date());
  const time = (
    <>
      <time dateTime={startTime}>{format(start, 'h:mm a')}</time> -{' '}
      <time dateTime={endTime}>{format(end, 'h:mm a')}</time>
    </>
  );
  let attendeesLight = {};
  if (attendees.data !== null) {
    attendeesLight=attendees.data
  }
  const [remaining, setRemaining] = useState(attendeesLight.length - 3);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseOver = () => {
    setRemaining(attendeesLight.length - 3);
    setTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setRemaining(0);
    setTooltipVisible(false);
  };

  return (
    <tr className="items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-slate-700">
        <Link href={`/dashboard/events/${idx}`}>{title}</Link>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{date}</td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{time}</td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex">
          {attendeesLight.map((attendee, idx) => (
            <div key={idx}  style={{ display: 'flex', alignItems: 'center' }}>
              {idx < 3 ? (
                <div>
                 <Avatar
                 key={idx}
                 src={attendee.attributes.avatar.data.attributes.url}
                 alt={attendee.attributes.name}
               />
               {attendee.attributes.name}</div>
              ) : (
                idx === 3 ? (
                  <div 
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{position: 'relative', cursor: 'default', marginLeft: '4px' }}
                >．．．
                {remaining > 0 && (
                <div
                style={{
                  display: tooltipVisible ? 'block' : 'none',
                  position: 'absolute',
                  top: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  borderRadius: '4px'
                }}
              >
                {remaining} more
              </div>
              )}
                </div>
                ) : null 
              )       
              }
            </div>
          ))}
          {attendeesLight.length === 0 ? <div className="w-10 h-10 rounded-full flex flex-shrink-0"></div> : null}
        </div>
      </td>
    </tr>
  );
}

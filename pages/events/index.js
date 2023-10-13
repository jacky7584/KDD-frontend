import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';

import Layout from '../../layouts/default';
import Alert from '../../components/Alert';
import axiosInstance from '../../components/axiosInstance';

import en from '../../i18n/en.json';
import zh from '../../i18n/zh.json';

const title = {
  en: { title: en.header, prefix: en.navbar.events },
  zh: { title: zh.header, prefix: zh.navbar.events },
};

// const meetings = [
//   {
//     id: 1,
//     name: 'Leslie Alexander',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-05-11T13:00',
//     endDatetime: '2022-05-11T14:30',
//   },
//   {
//     id: 2,
//     name: 'Michael Foster',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-05-20T09:00',
//     endDatetime: '2022-05-20T11:30',
//   },
//   {
//     id: 3,
//     name: 'Dries Vincent',
//     imageUrl:
//       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-05-20T17:00',
//     endDatetime: '2022-05-20T18:30',
//   },
//   {
//     id: 4,
//     name: 'Leslie Alexander',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-06-09T13:00',
//     endDatetime: '2022-06-09T14:30',
//   },
//   {
//     id: 5,
//     name: 'Michael Foster',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-05-13T14:00',
//     endDatetime: '2022-05-13T14:30',
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Calendar() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  let [meetings, setMeetings] = useState([]);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function setToday() {
    setCurrentMonth(format(today, 'MMM-yyyy'));
    setSelectedDay(today);
  }

  useEffect(() => {
    axiosInstance
      .get('/events', {
        params: {
          'filters[date][$gte]': format(firstDayCurrentMonth, 'yyyy-MM-dd'),
          'filters[date][$lte]': format(endOfMonth(firstDayCurrentMonth), 'yyyy-MM-dd'),
        },
      })
      .then((response) => {
        let data = response.data.data;
        data.forEach((meeting, idx, meetings) => (meetings[idx] = { id: meeting.id, ...meeting.attributes }));
        setMeetings(data);
      });
  }, [currentMonth]);

  let selectedDayMeetings = meetings.filter((meeting) => isSameDay(parseISO(meeting.date), selectedDay));

  return (
    <div className="">
      <div className="max-w-md px-4 mx-auto md:max-w-full md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-slate-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-2xl text-slate-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-slate-400 hover:text-slate-500"
              >
                <span className="sr-only">Previous month</span>
                <i className="bi bi-chevron-left text-xl w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={setToday}
                className="-my-1.5 -mr-1.5 flex flex-none p-1.5 pt-2.5 text-slate-400 hover:text-slate-500"
              >
                <span>Today</span>
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-slate-400 hover:text-slate-500"
              >
                <span className="sr-only">Next month</span>
                <i className="bi bi-chevron-right text-xl w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-md leading-6 text-center text-slate-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-md">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5')}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-slate-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-slate-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) && !isToday(day) && 'bg-slate-900',
                      !isEqual(day, selectedDay) && 'hover:bg-slate-200',
                      (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {Array.from(meetings).some((meeting) => isSameDay(parseISO(meeting.date), day)) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-slate-900 text-2xl">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyy')}</time>
            </h2>
            <ol className="mt-4 space-y-1 text-lg leading-6 text-slate-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => <Meeting meeting={meeting} key={meeting.id} />)
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Meeting({ meeting }) {
  let startTime = parse(meeting.startTime, 'HH:mm:ss', new Date());
  let endTime = parse(meeting.endTime, 'HH:mm:ss', new Date());

  return (
    <li className="flex items-center px-4 py-4 space-x-4 group rounded-xl focus-within:bg-slate-100 hover:bg-gray-100">
      <div className="flex-none w-1 h-10 bg-sky-500 rounded-lg "></div>
      <div className="flex-auto">
        <p className="text-slate-900">{meeting.title}</p>
        <p className="mt-0.5">
          {/* {startTime} - {endTime} */}
          <time dateTime={meeting.startTime}>{format(startTime, 'h:mm a')}</time> -{' '}
          <time dateTime={meeting.endTime}>{format(endTime, 'h:mm a')}</time>
        </p>
      </div>
    </li>
  );
}

let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'];

export default function EventIndex({ locale }) {
  return (
    <>
      <Head>
        <title>
          {title[locale].prefix} | {title[locale].title}
        </title>
        <meta property="og:title" content={`${title[locale].prefix} | ${title[locale].title}`} />
      </Head>
      <h1 className="hidden">
        {title[locale].prefix} | {title[locale].title}
      </h1>
      <section className="flex relative md:min-h-screen py-16">
        <div className="container flex flex-col mx-auto justify-center px-2 py-8 md:py-16">
          <Alert className="bg-slate-500 text-white w-full">
            <span className="text-xl inline-block mr-5  align-baseline">
              <i className="bi bi-bell" />
            </span>
            <div className="">2022 Spring Meeting Time: Monday, Thursday 14:00-17:00</div>
          </Alert>
          <Calendar />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: { locale },
  };
}

EventIndex.layout = Layout;

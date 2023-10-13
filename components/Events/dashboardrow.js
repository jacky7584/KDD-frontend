import React, { useRef } from 'react';
import File from '../File';
import Resfile from '../resfile';
export default function Dashboardrow({ idx, file ,author,title,type,updatedAt}) {
  if (file.data != null) {
  return (

    <tr className="items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-slate-700">
      {title}
      </th>
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{author.data.attributes.name}</td>
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{type}</td>
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{updatedAt}</td>
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div className="flex">
      <div>
              {file.data!=null ? <div> <tr className="items-center"><td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Resfile key={idx} file={file} author={author} title={title}/> </td></tr></div>:null}
            </div>
      </div>
    </td>
  </tr>
  );
  }
}

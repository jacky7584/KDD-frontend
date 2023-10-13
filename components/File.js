import Avatar from './Avatar';

export default function File({ resource }) {
  if (resource.attributes.file.data != null) {
    return (
      <a
        className="flex flex-row items-center text-sm hover:bg-slate-500 hover:text-slate-50 p-2 rounded-lg border border-slate-300 hover:border-slate-500"
        type="link"
        href={`${process.env.NEXT_PUBLIC_API_URL}${resource.attributes.file.data.attributes.url}`}
      >
        <div className="mr-2">
          <Avatar
            alt={resource.attributes.author.data.attributes.name}
            src={resource.attributes.author.data.attributes.avatar.data.attributes.url}
            shift={false}
          />
        </div>

        <div className="flex flex-col">
          <div>{resource.attributes.author.data.attributes.name}</div>
          <div>{`(${resource.attributes.file.data.attributes.name})`}</div>
        </div>
      </a>
    );
  }
  //https://api.kdd.csie.ntust.edu.tw/uploads/Multi_Label_Text_Classification_Based_on_Multidimensional_Information_Extraction_bd10e414d5.pptx
}

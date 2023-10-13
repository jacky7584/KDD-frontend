export default function Avatar({ src, alt, shift }) {
  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}${src}`}
        alt={alt}
        className={`w-10 h-10 rounded-full border-2 border-slate-50 shadow ${shift ? '-ml-4' : 0}`}
      ></img>
    </>
  );
}

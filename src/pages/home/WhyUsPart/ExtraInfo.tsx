export default function ExtraInfo({ text, LogoComponent }: { text: string; LogoComponent: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row text-center sm:text-left gap-4">
      <div className="text-4xl size-16 flex items-center justify-center bg-[#F5B754] rounded-full p-2 shadow-md">{LogoComponent}</div>
      <p>{text}</p>
    </div>
  );
}

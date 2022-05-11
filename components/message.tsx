import { cls } from "../libs/utils";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}
export default function Message({
  message,
  reversed,
  avatarUrl,
}: MessageProps) {
  return (
    <div
      className={cls(
        "flex space-x-2 py-4",
        reversed ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <div className="w-8 h-8 bg-slate-300 rounded-full" />
      <div className="border px-2 py-2 text-sm border-gray-400 rounded-md w-1/2">
        {message}
      </div>
    </div>
  );
}

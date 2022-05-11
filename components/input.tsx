interface InputProps {
  name: string;
  label: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-black-500 pt-4">
        {label}
        {/* {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null} */}
      </label>
      {kind === "text" ? (
        <input
          id={name}
          className="appearance-none w-full border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
          type="email"
          {...rest}
          required
        />
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-md">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-400 select-none">
            +82
          </span>
          <input
            id={name}
            type="text"
            className="appearance-none w-full border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
            required
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="flex items-center relative pb-3">
          <div className="absolute pl-3 pointer-events-none">
            <span className="text-gray-500 text-sm ">$</span>
          </div>
          <input
            className="pl-7 w-full border-gray-300 rounded-md shadow-md"
            id={name}
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-2 font-bold pointer-events-none">
            <span>USD</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

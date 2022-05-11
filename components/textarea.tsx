interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export default function Textarea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-bold text-black-500 pt-4"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="shadow-md w-full rounded-md border-gray-300 focus:border-blue-300"
        rows={4}
        {...rest}
      />
    </div>
  );
}

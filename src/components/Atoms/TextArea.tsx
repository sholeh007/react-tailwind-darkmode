interface propTypes {
  placeholder: string;
}

export default function TextArea({ placeholder }: propTypes) {
  return (
    <textarea
      className="form-textarea w-full rounded-sm dark:bg-slate-900 dark:text-slate-200"
      cols={30}
      rows={10}
      placeholder={placeholder}
    ></textarea>
  );
}

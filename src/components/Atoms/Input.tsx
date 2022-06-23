interface typeProps {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: typeProps) {
  return (
    <input
      className="form-input w-full rounded-sm dark:bg-slate-900 dark:text-slate-200"
      type={type}
      placeholder={placeholder}
    />
  );
}

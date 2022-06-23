import ctx from "classnames";

interface typeProps {
  hasFooter?: boolean;
}

export default function Logo({ hasFooter }: typeProps) {
  const styles = ctx({
    "text-2xl font-semibold": true,
    "text-indigo-800 dark:text-slate-100": !hasFooter,
    "text-slate-100": hasFooter,
  });

  return (
    <div className="flex items-center gap-2">
      <img className="w-8" src="/img/logo.png" alt="logo" />
      <span className={styles}>Portwind</span>
    </div>
  );
}

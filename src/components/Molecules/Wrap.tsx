import ctx from "classnames";

import { ReactNode } from "react";

interface propsType {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  isForm?: boolean;
  children: ReactNode;
}

export default function Wrap({
  id,
  title,
  subTitle,
  content,
  isForm,
  children,
}: propsType) {
  const styles = ctx({
    "p-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4": !isForm,
  });

  return (
    <section id={id} className="py-24 dark:bg-slate-800">
      <div className="flex flex-col items-center space-y-4 px-4">
        <h1 className="text-indigo-600 dark:text-red-500 font-semibold text-2xl md:text-3xl">
          {title}
        </h1>
        <h1 className="text-gray-600 dark:text-gray-100 text-xl">{subTitle}</h1>
        <p className="text-gray-600 dark:text-gray-400 font-light w-1/2 text-center">
          {content}
        </p>
      </div>
      <div className={styles}>{children}</div>
    </section>
  );
}

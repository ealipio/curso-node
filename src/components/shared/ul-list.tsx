import { CheckIcon } from "@heroicons/react/20/solid";

type Props = {
  textColor: string;
  items: string[];
};
export default function List({ textColor, items }: Props) {
  return (
    <ul className={`divide-y divide-slate-200 text-base tracking-tight ${textColor}`}>
      {items.map((item, index) => (
        <li key={index} className="flex py-2">
          <CheckIcon className={`h-6 w-6 ${textColor}`} />
          <span className="ml-4">{item}</span>
        </li>
      ))}
    </ul>
  );
}

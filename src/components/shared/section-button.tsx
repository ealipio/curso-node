type Props = {
  counter: string;
  label: string;
};

export default function SectionButton({ counter, label }: Props) {
  return (
    <h2 className="inline-flex items-center rounded-full px-4 py-1 text-green-600 ring-1 ring-inset ring-green-600">
      <span aria-hidden className="font-mono text-sm">
        {counter}
      </span>
      <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
      <span className="ml-3 text-base font-medium tracking-tight">{label}</span>
    </h2>
  );
}

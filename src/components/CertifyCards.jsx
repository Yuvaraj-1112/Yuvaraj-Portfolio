export default function CardInfo({ label, children }) {
  return (
    <p className="flex flex-row gap-1 sm:gap-[6px] lg:gap-2 text-base sm:text-lg text-gray-600">
      <strong className="text-base md:text-lg text-orange-400 font-medium">
        {label}:
      </strong>
      {children}
    </p>
  );
}
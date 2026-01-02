export default function Section({ children, className = "" }) {
  return (
    <section
      className={`bg-orange-50 pt-20 ${className}`}
    >
      <div
        className="max-w-7xl mx-auto
                   px-4 sm:px-6 lg:px-8
                   py-4 sm:py-6 lg:py-10
                   flex flex-col gap-6 sm:gap-8 lg:gap-10"
      >{children}
      </div>
    </section>
  );
}

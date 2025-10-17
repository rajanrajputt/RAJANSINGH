// components/TechStackCard.tsx

type TechStackCardProps = {
  id: string;
  name: string;
  description: string;
};

export function TechStackCard({ id, name, description }: TechStackCardProps) {
  return (
    <div 
      id={id}
      // scroll-mt-16 class add ki gayi hai
      className="group rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 scroll-mt-16"
    >
      <h3 
        className="text-xl font-bold text-slate-800 transition-colors group-hover:text-blue-600"
      >
        {name}
      </h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}
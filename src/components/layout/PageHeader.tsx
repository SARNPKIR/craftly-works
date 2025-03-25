import AnimatedGradient from "../ui/AnimatedGradient";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="relative py-12 mt-6 overflow-hidden">
      <AnimatedGradient className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

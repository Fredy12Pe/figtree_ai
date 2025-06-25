interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {children}
      </div>
    </div>
  );
} 
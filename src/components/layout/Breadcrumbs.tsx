import { useLocation } from "react-router-dom";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatPathname = (pathname: string) => {
    // Format special paths with hyphens
    if (pathname.includes('-')) {
      return pathname.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }
    return pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  return (
    <div className="container mx-auto px-6 py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            
            return last ? (
              <BreadcrumbItem key={to}>
                <BreadcrumbPage>{formatPathname(value)}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={to}>
                <BreadcrumbLink href={to}>{formatPathname(value)}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;

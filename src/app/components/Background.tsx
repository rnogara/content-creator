import Image from 'next/image';
import { Children, isValidElement, type ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

interface MainElementProps {
  children?: ReactNode;
  [key: string]: unknown; // For any other props that might exist
}

const Background = ({ children }: BackgroundProps) => {
  // Get the first child (should be the main element)
  const mainElement = Children.only(children);
  // Get the sections from the main element's children
  const sections = isValidElement<MainElementProps>(mainElement) && mainElement.props.children 
    ? Children.toArray(mainElement.props.children)
    : [];
  
  return (
    <div className="relative w-full">
      {/* Background Container */}
      <div className="absolute inset-0 -z-10">
        {/* Top background */}
        <div className="absolute inset-0 h-[90vh] overflow-hidden">
          <div className="relative w-full h-full">
            <Image 
              src='/background/background-top.png' 
              alt='Top background'
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center top' }}
              priority
            />
          </div>
        </div>

        {/* Mid backgrounds - one for each middle section */}
        {sections.length > 2 && sections.slice(1, -1).map((_, index) => (
          <div 
            key={`mid-bg-${index + 1}`}
            className="absolute inset-x-0 h-[90vh] overflow-hidden"
            style={{ top: `${90 * (index + 1)}vh` }}
          >
            <div className="relative w-full h-full">
              <Image 
                src='/background/background-mid.png' 
                alt='Mid background'
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center center' }}
                priority
              />
            </div>
          </div>
        ))}

        {/* Bottom background for the last section */}
        {sections.length > 1 && (
          <div 
            className="absolute inset-x-0 h-[90vh] overflow-hidden"
            style={{ top: `${90 * (sections.length - 1)}vh` }}
          >
            <div className="relative w-full h-full">
              <Image 
                src='/background/background-bottom.png' 
                alt='Bottom background'
                fill
                className="object-cover object-bottom"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative w-full font-merienda text-amber-200">
        {children}
      </div>
    </div>
  );
};

export default Background;
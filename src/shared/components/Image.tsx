import { IKImage } from "@/shared/libs";

export const Image = ({ 
    path, 
    alt, 
    size = "medium", 
    loading = "lazy",
    className = "",
    ...props 
  }) => {
    const getTransformation = (size) => {
      const configs = {
        small: {
          width: 600,      
          height: 800,     
          q: 92           
        },
        medium: {
          width: 900,      
          height: 1200,    
          q: 90           
        },
        large: {
          width: 1200,     
          height: 1600,    
          q: 88           
        }
      };
      
      return {
        ...configs[size],
        format: "auto",           
        crop: "maintain_ratio",
        fo: "auto",
        pr: true,                 
        e: "sharpen-1",          
        orig: false,             
        dpr: "auto"              
      };
    };
  
    return (
      <IKImage
        urlEndpoint="https://ik.imagekit.io/heshamwilshere"
        path={path}
        transformation={[getTransformation(size)]}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        lqip={{ 
          active: true, 
          quality: 25,    
          blur:100         
        }}
        loading="lazy"
        alt={alt}
        className={className}
        {...props}
      />
    );
  };
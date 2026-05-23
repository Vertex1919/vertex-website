import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  className,
}: Props) {

  return (

    <div className={className}>

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

    </div>

  );
}
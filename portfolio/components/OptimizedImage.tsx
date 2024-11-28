import Image, { ImageProps } from 'next/image'

type OptimizedImageProps = Omit<ImageProps, 'width' | 'height'> & {
  width?: number
  height?: number
}

export default function OptimizedImage({ src, alt, width, height, ...props }: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 630}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  )
}


import Image from 'next/image'
import { ImageProps } from 'next/image';

type MinioImageProps = Omit<ImageProps, 'src'> & {
    src: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
};

export default function MinioImage({
    src,
    alt,
    width,
    height,
    style,
    className,
    fill,
    priority = false,
    ...props
}: MinioImageProps) {
    // Utiliser les images locales depuis /public/image/
    const imagePath = `/image/${src}`;

    if (fill) {
        return (
            <Image
                {...props}
                src={imagePath}
                alt={alt}
                fill={true}
                style={{
                    ...style,
                    objectFit: 'cover'
                }}
                className={className}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
            />
        );
    }

    return (
        <Image
            {...props}
            src={imagePath}
            alt={alt}
            width={width || 800}
            height={height || 600}
            style={style}
            className={className}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
        />
    );
}
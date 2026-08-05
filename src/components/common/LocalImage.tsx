import Image from 'next/image'
import { ImageProps } from 'next/image';

type LocalImageProps = Omit<ImageProps, 'src'> & {
    src: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
};

// Les images vivent dans /public/image/. On accepte aussi bien un simple nom de
// fichier ("faq.webp") qu'un chemin deja prefixe ("/image/faq.webp") : sans ca,
// un appelant qui passe un chemin absolu produit "/image//image/faq.webp".
function resolveImagePath(src: string): string {
    const trimmed = src.replace(/^\/+/, '');
    const name = trimmed.startsWith('image/') ? trimmed.slice('image/'.length) : trimmed;
    return `/image/${name}`;
}

export default function LocalImage({
    src,
    alt,
    width,
    height,
    style,
    className,
    fill,
    priority = false,
    ...props
}: LocalImageProps) {
    const imagePath = resolveImagePath(src);

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

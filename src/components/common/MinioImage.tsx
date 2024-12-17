"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getMinioUrl } from '@/utils/minio-client'
import { ImageProps } from 'next/image';

type MinioImageProps = Omit<ImageProps, 'src'> & {
    src: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
        <stop stop-color="#f6f7f8" offset="20%" />
        <stop stop-color="#edeef1" offset="50%" />
        <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#f6f7f8" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

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
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const loadImage = async () => {
            const objectName = src.split('/').pop();
            if (objectName) {
                const url = await getMinioUrl(objectName);
                if (url) setImageUrl(url);
            }
        };
        loadImage();
    }, [src]);

    const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(width || 800, height || 600))}`;

    if (!imageUrl) {
        return <div style={{ width, height }} className={className} />;
    }

    if (fill) {
        return (
            <Image
                {...props}
                src={imageUrl}
                alt={alt}
                fill={true}
                style={{
                    ...style,
                    objectFit: 'cover'
                }}
                className={className}
                priority={priority}
                placeholder="blur"
                blurDataURL={blurDataURL}
                loading={priority ? "eager" : "lazy"}
            />
        );
    }

    // Si une seule dimension est spécifiée, on met l'autre en "auto"
    const imageStyle = {
        ...style,
        width: width ? width : (height ? 'auto' : undefined),
        height: height ? height : (width ? 'auto' : undefined),
    };

    return (
        <Image
            {...props}
            src={imageUrl}
            alt={alt}
            width={width || 800}
            height={height || 600}
            style={imageStyle}
            className={className}
            priority={priority}
            placeholder="blur"
            blurDataURL={blurDataURL}
            loading={priority ? "eager" : "lazy"}
        />
    );
}
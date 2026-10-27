'import client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function SafeImg({
  src,
  alt = 'Ayesha Salon Image',
  fallbackSrc = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
  ...props
}: SafeImgProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      {...props}
      src={hasError ? fallbackSrc : (imgSrc || fallbackSrc)}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
    />
  );
}

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  alt = 'Ayesha Salon Image',
  fallbackSrc = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : (imgSrc || fallbackSrc)}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
    />
  );
}

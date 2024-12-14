import { DEFAULT_IMAGE_WIDTH, IMAGE_QUALITY } from './constants';

interface ImageOptimizationParams {
  width?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

export const getOptimizedImageUrl = (
  url: string,
  { width = DEFAULT_IMAGE_WIDTH, quality = IMAGE_QUALITY, format = 'webp' }: ImageOptimizationParams = {}
): string => {
  if (!url.includes('unsplash.com')) return url;
  
  const params = new URLSearchParams({
    fm: format,
    w: width.toString(),
    q: quality.toString(),
    auto: 'format,compress'
  });
  
  return `${url}?${params.toString()}`;
};
export interface AppImage {
  banner_image_url?: string
  id: string
}

export interface AppImageRequest {
  bannerImageUrl: string
}

export interface AppImageResponse extends AppImageRequest {
  id: string
}

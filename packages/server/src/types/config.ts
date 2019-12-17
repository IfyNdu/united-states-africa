export interface AppImageRequest {
  bannerImageUrl: string
}

export interface AppImage {
  banner_image_url: string
  id: string
}

export interface AppImageResponse extends AppImageRequest {
  id: string
}

export interface AppStaticsRequest {
  bannerBody: string
  bannerTitle: string
}

export interface AppStaticsResponse extends AppStaticsRequest {
  id: string
}

export interface AppStatics {
  banner_body: string
  banner_title: string
  id: string
}

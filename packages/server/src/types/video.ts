export interface VideoCategory {
  description: string
  id: string
  image_url: string
}

export interface VideoCategoryRequest {
  description: string
  imageUrl: string
}

export interface VideoCategoryResponse extends VideoCategoryRequest {
  id: string
}

export interface VideoTag {
  id: string
  name: string
}
export interface VideoCategory {
  description: string
  id: string
  thumbnail: string
}

export interface VideoCategoryRequest {
  description: string
  thumbnail: string
}

export interface VideoCategoryResponse extends VideoCategoryRequest {
  id: string
}

export interface VideoTag {
  id: string
}

export interface VideoSource {
  id: string
  name?: string
}

export interface VideoRequest {
  sourceId: string
  videoCategoryId: string
  videoSourceId: string
}

export interface VideoResponse extends VideoRequest {
  id: string
}

export interface Video {
  definition: string
  description: string
  duration: number
  id: string
  thumbnail: string
  title: string
  video_category_id: string
  source_id: string
  video_source_id: string
}
export interface YoutubeResponse {
  definition?: string
  description?: string
  duration?: number
  thumbnail?: string
  title?: string
}

export interface TaggedVideoRequest {
  tagId: string
  videoId: string
}

export interface TaggedVideo {
  tag_id: string
  video_id: string
}
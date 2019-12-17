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

export interface VideoSource {
  id: string
  name?: string
}

export interface VideoRequest {
  description: string
  imageUrl: string
  sourceId: string
  title: string
  videoCategoryId: string
  videoId: string
  videoSourceId: string
}

export interface VideoResponse extends VideoRequest {
  id: string
}

export interface Video {
  description: string
  id: string
  image_url: string
  source_id: string
  title: string
  video_category_id: string
  video_id: string
  video_source_id: string
}

export interface TaggedVideoRequest {
  tagId: string
  videoId: string
}

export interface TaggedVideoResponse extends TaggedVideoRequest {
  id: string
}

export interface TaggedVideo {
  tag_id: string
  id: string
  video_id: string
}
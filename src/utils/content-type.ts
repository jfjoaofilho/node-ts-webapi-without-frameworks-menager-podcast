export enum ContentType {
  // JSON
  JSON = "application/json",

  // Texto
  TEXT = "text/plain",
  HTML = "text/html",
  CSS = "text/css",
  CSV = "text/csv",
  XML_TEXT = "text/xml",

  // XML
  XML = "application/xml",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",

  // Formulários
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  WEBP = "image/webp",
  SVG = "image/svg+xml",
  ICON = "image/x-icon",

  // Áudio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG_AUDIO = "audio/ogg",

  // Vídeo
  MP4 = "video/mp4",
  WEBM = "video/webm",
  OGG_VIDEO = "video/ogg",

  // Outros
  OCTET_STREAM = "application/octet-stream", // binário genérico
}

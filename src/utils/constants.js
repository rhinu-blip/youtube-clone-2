const GOOGLE_API_KEY = "AIzaSyCshSlN03bMm6zmHIosUwpjPUKu_aji_r4";


export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;


export const YOUTUBE_COMMENTS_API = (videoId) =>
  `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${GOOGLE_API_KEY}`;



export const YOUTUBE_SEARCH_API = (query) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}`;



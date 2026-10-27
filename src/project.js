/* Cấu hình riêng của CMS này — 2 CMS dùng chung toàn bộ code, chỉ khác file này */
export const PROJECT = {
  id: 'norton-park',
  name: 'Norton Park',
  siteUrl: 'https://norton-park-ten.vercel.app',
  /* website xuất schema các section/trường/ảnh + giá trị mặc định tại đây (sinh lúc build website) */
  schemaUrl: import.meta.env.VITE_SCHEMA_URL || 'https://norton-park-ten.vercel.app/cms-schema.json',
  /* trạng thái bản build đang chạy (website ghi lúc build) — CMS so với bản đã đăng */
  statusUrl: import.meta.env.VITE_STATUS_URL || 'https://norton-park-ten.vercel.app/cms-status.json',
  accent: '#8a6a4f',
};

/* Cấu hình riêng của CMS này — 2 CMS dùng chung toàn bộ code, chỉ khác file này */
export const PROJECT = {
  id: 'norton-park',
  name: 'Norton Park',
  siteUrl: 'https://norton-park-rho.vercel.app',
  /* website xuất schema các section/trường/ảnh + giá trị mặc định tại đây (sinh lúc build website) */
  schemaUrl: import.meta.env.VITE_SCHEMA_URL || 'https://norton-park-rho.vercel.app/cms-schema.json',
  accent: '#8a6a4f',
};

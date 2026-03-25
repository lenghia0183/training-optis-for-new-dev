/**
 * ============================================================
 *  IMAGES CONFIG – Quản lý tập trung toàn bộ link ảnh
 *  Chỉnh sửa file này là tất cả trang tự cập nhật theo.
 *  Cách dùng trong HTML: <img data-img-config="KEY" alt="..." />
 * ============================================================
 */

const IMG_CONFIG = {
  /* ── Brand Logo ── */
  bss_logo:
    "https://bsscommerce.com/vi/wp-content/uploads/2024/04/logo-bsscommerce.png.webp",

  shopify_logo:
    "https://www.penser.co.uk/wp-content/uploads/2021/12/shopify-logo-png-shopify-logo-300.png",

  /* ── App Logos ── */
  optis_logo:
    "https://docs.optis.me/~gitbook/image?url=https%3A%2F%2Fwww.google.com%2Fs2%2Ffavicons%3Fdomain%3Doptis.me%26sz%3D256&width=32&dpr=3&quality=100&sign=4ad3f0af&sv=2",

  swatch_logo:
    "https://optis-color-swatch-variant.myshopify.com/cdn/shop/files/swatch_logo_xanh_gi_ng_optis.png?v=1759719701&width=600",

  /* ── index.html – Hero / Banner ── */
  hero_coding_1:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",

  hero_coding_2:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",

  /* ── index.html – Shopify Section ── */
  shopify_ecommerce:
    "https://cdn.shopify.com/b/shopify-brochure2-assets/49bbf17e5d43dcd0bd09ad39724ae7ac.png",

  shopify_laptop:
    "https://www.stylefactoryproductions.com/wp-content/uploads/2022/11/what-is-shopify-video.png",

  // /* ── index.html – App Cards ── */
  app_product_options:
    "https://cdn.shopify.com/app-store/listing_images/5e7100d6dd8a25eae7b75d50f0d897df/desktop_screenshot/CNm53_3NjpADEAE=.png?height=360&width=640",

  app_color_swatch:
    "https://cdn.shopify.com/app-store/listing_images/4639b295c8340737b2c240f10481cb85/promotional_image/CPiSnIakqJIDEAE=.png?height=720&width=1280",

  // /* ── option.html ── */
  // option_hero: "",

  // /* ── swatch.html ── */
  // swatch_hero: "",
};

/* ── Auto-inject: tìm tất cả [data-img-config] và gán src ── */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-img-config]").forEach((el) => {
    const key = el.dataset.imgConfig;
    if (IMG_CONFIG[key]) {
      el.src = IMG_CONFIG[key];
    } else {
      el.remove();
      console.warn(`[images.config.js] Key không tồn tại: "${key}"`);
    }
  });
});

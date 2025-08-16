// Products data (with i18n fields)
const products = [
  {
    name: "PaperRig",
    summary: {
      'zh-CN': "轻量的 2D 骨骼动画插件（Unreal Engine）",
      'en': "A lightweight 2D skeletal animation plugin (Unreal Engine)"
    },
    desc: {
      'zh-CN': "PaperRig 是一款专为 Unreal Engine 开发的 2D 骨骼动画插件，完全基于引擎原生 Skeletal Mesh 系统构建。它提供轻量的骨骼绑定与蒙皮系统，适合希望在 Unreal 中以标准工作流创建并驱动 2D 骨骼动画的开发者。",
      'en': "PaperRig is a 2D skeletal animation plugin specifically developed for Unreal Engine, built entirely on the engine's native Skeletal Mesh system. It offers a lightweight bone binding and skinning system, ideal for developers who want to create and drive 2D skeletal animations within Unreal using a standard workflow."
    },
    link: SITE.docs,
    tags: {
      'zh-CN': ["UE 插件 ", "骨骼动画", "Workflow"],
      'en': ["UE Plugin ", "Skeletal Animation", "Workflow"]
    }
  }
];

function renderProducts(lang){
  const container = document.getElementById("product-list");
  if(!container) return;
  container.innerHTML = "";
  const t = I18N[lang] || I18N['en'];
  products.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="muted">${p.summary[lang]}</p>
      <p>${p.desc[lang]}</p>
      ${p.tags ? `<div class="tags" style="display:none;">${p.tags[lang].map(t=>`<span class="tag">${t}</span>`).join("")}</div>` : ""}
      <a class="btn btn-outline" href="${p.link}" target="_blank" rel="noopener">${t.products.viewDocs}</a>
    `;
    container.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const lang = (localStorage.getItem('lang')) || (navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en');
  renderProducts(lang);
});

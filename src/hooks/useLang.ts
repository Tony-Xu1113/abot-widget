import { ref, onMounted } from "vue";

type SupportedLanguage = "zh-CN" | "zh-TW" | "en-US";

export function useLang() {
  const browserLanguage = ref<SupportedLanguage>("zh-CN");

  const getUCLang = (): SupportedLanguage => {
    if (typeof navigator === "undefined") {
      return "zh-CN"; // SSR 环境默认值
    }

    const lang = (
      navigator.language ||
      (navigator as any).userLanguage ||
      (navigator as any).browserLanguage ||
      (navigator as any).systemLanguage ||
      "zh-CN"
    ).toLowerCase();

    // 语言映射逻辑
    if (lang.startsWith("zh")) {
      return lang.includes("tw") || lang.includes("hk") || lang.includes("mo")
        ? "zh-TW"
        : "zh-CN";
    } else if (lang.startsWith("en")) {
      return "en-US";
    } else {
      return "zh-CN"; // 其他语言默认简体中文
    }
  };

  const setLanguage = (lang: SupportedLanguage) => {
    browserLanguage.value = lang;
    // locale.value =
    //   lang === "zh-CN" ? "zh_cn" : lang === "zh-TW" ? "zh_tw" : "en";
  };

  onMounted(() => {
    const currentLang = getUCLang();
    setLanguage(currentLang);
  });

  return {
    browserLanguage,
    getUCLang,
    setLanguage,
  };
}

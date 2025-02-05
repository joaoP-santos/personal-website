import { ref } from "vue";

export const useBlogArticles = () => {
  const articles = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const extractDescription = (content, source) => {
    if (!content) return "";

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    // Remove unwanted elements
    tempDiv
      .querySelectorAll("figure, img, script, style")
      .forEach((el) => el.remove());

    // Get all text content and clean it
    let text = tempDiv.textContent.trim().replace(/\s+/g, " "); // Replace multiple spaces/newlines with single space

    if (source === "substack") {
      // Split text into sentences/phrases
      const phrases = text.split(/(?<=\.|\?|\!)\s+/);

      // Filter out phrases that:
      // 1. Start with capital letter AND
      // 2. Don't end with period, question mark, or exclamation mark
      // This helps remove headers and titles
      text = phrases
        .filter((phrase) => {
          const trimmedPhrase = phrase.trim();
          const startsWithCapital = /^[A-Z]/.test(trimmedPhrase);
          const endsWithPunctuation = /[.!?]$/.test(trimmedPhrase);

          // Keep the phrase if:
          // - it doesn't start with a capital letter, OR
          // - it starts with a capital letter BUT ends with proper punctuation
          return !startsWithCapital || endsWithPunctuation;
        })
        .join(" ");
    }

    // Truncate to 150 characters
    return text.slice(0, 150) + (text.length > 150 ? "..." : "");
  };

  const fetchMediumArticles = async () => {
    try {
      const timestamp = new Date().getTime();
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@santosjoaopedro&timestamp=${timestamp}`;
      console.log("Fetching Medium articles from:", url);

      const response = await fetch(url);
      const data = await response.json();

      console.log("Medium API response:", data);

      if (data.status === "ok") {
        return data.items.map((item) => ({
          title: item.title,
          description: extractDescription(
            item.content || item.description,
            "medium"
          ),
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          source: "medium",
        }));
      }
      throw new Error(`Medium API returned status: ${data.status}`);
    } catch (e) {
      console.error("Medium fetch error:", e);
      return [];
    }
  };

  const fetchSubstackArticles = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://santosjoaopedro.substack.com/feed&timestamp=${timestamp}`
      );
      const data = await response.json();

      if (data.status === "ok") {
        return data.items.map((item) => ({
          title: item.title,
          description: extractDescription(
            item.content || item.description,
            "substack"
          ),
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          source: "substack",
        }));
      }
      return [];
    } catch (e) {
      console.error("Failed to fetch Substack articles:", e);
      return [];
    }
  };

  const fetchArticles = async () => {
    loading.value = true;
    error.value = null;

    try {
      console.log("Starting article fetch...");
      const [mediumArticles, substackArticles] = await Promise.all([
        fetchMediumArticles(),
        fetchSubstackArticles(),
      ]);

      if (!mediumArticles.length && !substackArticles.length) {
        // Fallback content if both APIs fail
        articles.value = [
          {
            title: "My Latest Medium Article",
            description: "Check out my articles directly on Medium",
            link: "https://medium.com/@santosjoaopedro",
            pubDate: new Date().toLocaleDateString(),
            source: "medium",
          },
        ];
        throw new Error("No articles fetched");
      }

      articles.value = [...mediumArticles, ...substackArticles].sort((a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
      });
    } catch (e) {
      error.value = e.message;
      console.error("Article fetch error:", e);
    } finally {
      loading.value = false;
    }
  };
  return {
    articles,
    loading,
    error,
    fetchArticles,
  };
};

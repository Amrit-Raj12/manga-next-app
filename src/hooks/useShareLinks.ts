import { useRouter } from 'next/router';

const useShareLinks = () => {
  const router = useRouter();
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`; // Assuming your site URL is in env

  const getTelegramLink = () => `https://telegram.me/share/url?url=${encodeURIComponent(currentUrl)}`;
  const getTwitterLink = () => `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
  const getFacebookLink = () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const getRedditLink = () => `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}`;
  const getWhatsAppLink = () => `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return {
    getTelegramLink,
    getTwitterLink,
    getFacebookLink,
    getRedditLink,
    getWhatsAppLink,
  };
};

export default useShareLinks;

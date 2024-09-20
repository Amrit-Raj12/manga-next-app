import { useState, useEffect } from 'react';
import axios from 'axios';
import { MangaDetails, WikipediaResponse } from '@/types/types';

const useMangaDetails = (title: string) => {
  const [mangaDetails, setMangaDetails] = useState<MangaDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!title) return;

    const fetchMangaDetails = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Wikipedia API URL for searching pages by title
        const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts|pageprops&titles=${encodeURIComponent(title)}&exintro&explaintext&redirects=1`;

        const response = await axios.get<WikipediaResponse>(url);

        // Extract the page content from the response
        const pages = response.data.query.pages;
        const pageId = Object.keys(pages)[0]; // Get the page ID
        const page = pages[pageId];

        if (pageId === '-1') {
          setError('Manga not found on Wikipedia');
          setLoading(false);
          return;
        }

        // Extract description from the extract field
        const extract = page.extract;

        // Parse important fields from infobox in future (for now, placeholders)
        const description = extract.split('\n')[0] || 'No description available';

        setMangaDetails({
          description: description.trim(),
          writtenBy: 'Unknown',    // Placeholder for future infobox parsing
          publishedBy: 'Unknown',  // Placeholder for future infobox parsing
          genre: 'Unknown',        // Placeholder for future infobox parsing
        });
      } catch (err) {
        setError('Error fetching manga details');
      } finally {
        setLoading(false);
      }
    };

    fetchMangaDetails();
  }, [title]);

  return { mangaDetails, loading, error };
};

export default useMangaDetails
// Cache pour stocker les URLs présignées
const urlCache = new Map<string, { url: string; expires: number }>();

// Fonction pour générer l'URL présignée d'un objet via l'API
export const getMinioUrl = async (objectName: string): Promise<string> => {
    try {
        if (!objectName) {
            throw new Error('Object name is required');
        }

        // Vérifier si l'URL est en cache et toujours valide
        const cached = urlCache.get(objectName);
        if (cached && cached.expires > Date.now()) {
            return cached.url;
        }

        // Construire l'URL absolue
        const baseUrl = typeof window !== 'undefined' 
            ? window.location.origin 
            : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
            
        const apiUrl = new URL(`/api/minio`, baseUrl);
        apiUrl.searchParams.set('object', encodeURIComponent(objectName));

        const response = await fetch(apiUrl.toString(), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.url) {
            throw new Error('No URL returned from the server');
        }

        // Vérifier que l'URL est valide
        try {
            new URL(data.url);
        } catch (urlError) {
            const errorDetails = urlError instanceof Error ? urlError.message : String(urlError);
            throw new Error(`Invalid URL returned from server: ${data.url}. Details: ${errorDetails}`);
        }

        // Stocker l'URL en cache avec une expiration de 6 jours
        urlCache.set(objectName, {
            url: data.url,
            expires: Date.now() + 6 * 24 * 60 * 60 * 1000
        });
        
        return data.url;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`Error getting presigned URL for ${objectName}:`, errorMessage);
        throw error;
    }
};

// Fonction pour précharger une liste d'images
export const preloadImages = async (objectNames: string[]) => {
    const validNames = objectNames.filter(name => name && typeof name === 'string');
    return Promise.all(validNames.map(getMinioUrl));
};
import { useState } from 'react';

export default function useLoader() {
  const [isLoading, setIsLoading] = useState(false);

  return { isLoading, setIsLoading };
}

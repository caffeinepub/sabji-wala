import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useAppName() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['appName'],
    queryFn: async () => {
      if (!actor) return 'Sabji wala';
      return actor.getAppName();
    },
    enabled: !!actor && !isFetching,
  });
}

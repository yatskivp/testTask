
import { EmptyDataScreen } from '../../organisms/emptyDataScreen/emptyDataScreen';
import { ErrorScreen } from '../../organisms/errorScreen/errorScreen';
import { LoadingScreen } from '../../organisms/loadingScreen/loadingScreen';
import { RenderingManagerProps } from './renderingManager.types';

export const RenderingManager: RenderingManagerProps = ({
  data,
  children,
  loading,
  error,
}) => {
  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!data || data.length === 0) {
    return <EmptyDataScreen />;
  }

  return <>{children}</>;
};

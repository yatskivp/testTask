import { EmptyDataScreen } from '../../atoms/emptyDataScreen/emptyDataScreen';
import { ErrorScreen } from '../../atoms/errorScreen/errorScreen';
import { LoadingScreen } from '../../atoms/loadingScreen/loadingScreen';
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

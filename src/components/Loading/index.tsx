import { selectIsLoading } from "@/redux/features/loading/loadingSelectors";
import { useSelector } from "react-redux";

export default function Loading() {
  const isLoading = useSelector(selectIsLoading);
  if (!isLoading) return null;

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-70'>
      <div className='loader'></div>
    </div>
  );
}

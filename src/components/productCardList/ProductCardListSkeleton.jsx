import Skeleton from "../skeleton/Skeleton";
import "./ProductCardList.css";

export default function ProductCardListSkeleton() {
  return [1, 2, 3, 4].map(() => (
    <div className="list_item_skeleton">
      <Skeleton height="260px" width="100%" />
      <Skeleton height="20px" width="100%" />
      <Skeleton height="60px" width="100%" />
      <div className="skel_but">
        <Skeleton height="48px" width="100px" />
      </div>
    </div>
  ));
}

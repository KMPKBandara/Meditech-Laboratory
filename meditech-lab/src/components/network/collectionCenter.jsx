

const CollectionCenter = ({ center, branch }) => (
  <div className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
    <div className={`w-2 h-2 rounded-full bg-gradient-to-r text-blue-800 ${branch.color} mt-2 flex-shrink-0`}></div>
    <div>
      <p className="font-medium text-blue-800 text-sm">{center.name}</p>
      <p className="text-blue-600 text-xs">{center.address}</p>
    </div>
  </div>
);

export default CollectionCenter;